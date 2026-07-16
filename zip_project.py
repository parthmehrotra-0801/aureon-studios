import os
import zipfile

def zip_directory(folder_path, zip_path):
    print(f"Starting zip process of '{folder_path}' to '{zip_path}'...")
    exclude_dirs = {'node_modules', 'dist', '.git', '__pycache__', 'build', 'coverage'}
    exclude_files = {'.DS_Store', '.dev.pid', '.dev.env.json', 'aureon-studios-complete.zip', 'zip_project.py'}
    
    with zipfile.ZipFile(zip_path, 'w', zipfile.ZIP_DEFLATED) as zipf:
        for root, dirs, files in os.walk(folder_path):
            # Modify dirs in-place to exclude unwanted directories
            dirs[:] = [d for d in dirs if d not in exclude_dirs]
            
            for file in files:
                if file in exclude_files:
                    continue
                
                full_path = os.path.join(root, file)
                # Determine path relative to folder_path to store in the ZIP
                rel_path = os.path.relpath(full_path, folder_path)
                zipf.write(full_path, rel_path)
                print(f"Added: {rel_path}")

if __name__ == "__main__":
    workspace_dir = os.path.abspath(".")
    public_dir = os.path.join(workspace_dir, "public")
    
    if not os.path.exists(public_dir):
        os.makedirs(public_dir)
        
    destination_zip = os.path.join(public_dir, "aureon-studios-complete.zip")
    zip_directory(workspace_dir, destination_zip)
    print("ZIP compression successfully completed!")
