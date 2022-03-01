import fs from '../../node_modules/';

export function readData(){
    // Use fs.readFile() method to read the file
    return fs.readFile('Demo.txt', 'utf8', function(err, data){
        
        // Display the file content
        console.log(data)
        return data;
    });
}