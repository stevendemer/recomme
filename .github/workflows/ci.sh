
#!/bin/bash

if [ "$#" -ne 3]; then
    echo "Usage: $0 <username@host.com> <john@doe.com> <file name>"
    exit 1
fi

ssh_key_file = "$3"
ssh_server = "$1"
mail_address = "$2"

# generate key
if [ ! -f ~/.ssh/"$ssh_key_file" ]; then
    ssh-keygen -t rsa -b 4096 -C "$email_address" -f ~/.ssh/"$ssh_key_file" -N ""
fi

ssh_key_path="~/.ssh"

# Copy the public and private keys to the server
ssh "$ssh_server" "mkdir -p $ssh_key_path"
scp ~/.ssh/"$ssh_key_file" "$ssh_server:$ssh_key_path"
scp ~/.ssh/"$ssh_key_file.pub" "$ssh_server:$ssh_key_path"

# Add the public key to authorized_keys on the server
ssh "$ssh_server" "cat $ssh_key_path/$ssh_key_file.pub >> $ssh_key_path/authorized_keys"




