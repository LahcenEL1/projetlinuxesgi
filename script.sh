#!/bin/bash
echo "Starting backup script..."

# Date and directory parameters


while [[ a="1" ]]; do
    echo "Enter une date: "
    read date
    a="1"
done
# date=${1:-$(date +"%Y-%m-%d")}
backup_dir=${2:-"/home/lahcen/backup/subdirectory"}

# Source directory
src_dir="/home/lahcen/projetLinux"

# Create the backup directory if it doesn't exist
echo "Creating backup directory if it doesn't exist..."
mkdir -p $backup_dir

# Start backup
echo "Starting backup of $src_dir to $backup_dir"
rsync -av --exclude=node_modules $src_dir $backup_dir/backup_$date

echo "Backup completed successfully."
