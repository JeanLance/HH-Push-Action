class GitCommand {
    constructor(working_directory){
        this.working_directory = working_directory;
    }
    //Command: git init 
    init(){
        this.staging = [];
        this.local_repository = [];
        return "Initialized as empty Git repository.";
    }

    //Command: git status
    status(){
        let status   = "";
        let new_changes = this.working_directory.new_changes;
        let changes  = Object.keys(new_changes).length;
      
        status += `You have ${changes} change/s.\n`;

        for (let i = 0; i < changes; i++) {
            status += Object.keys(new_changes)[i];

            // Move to next line when there's another changes
            if (Object.keys(new_changes)[i+1]) {
                status += '\n';
            }
        }
        return status;
    }

    //Command: git add <filename/file directory/wildcard> 
    add(path_file){
        let modified_files = this.working_directory.new_changes;
        
        if(modified_files[path_file]){
            this.staging.push(modified_files[path_file]);
            delete modified_files[path_file];
        }
        else if(path_file == "."){
            this.staging.push(modified_files);
            this.working_directory.new_changes = {};
        }
        else if(path_file == "*"){
            let file_list = Object.keys(modified_files);

            for(let row=0; row < file_list.length; row++){
                if(!file_list[row].startsWith(".")){
                    this.staging.push(modified_files[file_list[row]]);
                    delete this.working_directory.new_changes[file_list[row]]; 
                }
            }
        }
        else{
            return `Failed to add ${path_file}! File is not modified or missing.`;
        }
        return "Successfully added as index file/s.";
    }

    //Command: git commit -m "<message>"
    commit(message){
        if(this.staging.length > 0){
            // Create copy of last state local repo. JSON.stringify() is use to make a clone of the local repository
            this.record_local_repository = JSON.stringify(this.local_repository);
            this.record_staging = this.staging;

            this.local_repository.push({ "message": message, "files": this.staging });
            this.staging = [];
            return "Done committing to local repository.";
        }
        return "Nothing to commit.";
    }

    //Command: git push
    push(){   
        if(this.local_repository.length > 0){
            return "Done pushing to remote repository.";
        } 
        else {
            return "Nothing to push. No committed file found.";
        }     
    }

    // Command: git revert
    revert(){
        this.local_repository = JSON.parse(this.record_local_repository);
        this.staging = this.record_staging;
    }
}


module.exports = GitCommand;
