
// Auto-Populate properties using Proxy

// e.g. 

// have create a file "yoshi.txt" in a folder but the folder is not yet created
// so normally what can be do

function Folder() { }
const rootFolder = new Folder();
rootFolder.ninjaDir = new Folder();
rootFolder.ninjaDir.firstNinjaDir = new Folder();
rootFolder.ninjaDir.firstNinjaDir.ninjaFile = "yoshi.txt";

// Seems a tad more tedious that necessary, doesn't it?


// Using the Proxy

function Folder() {
    return new Proxy({}, {
        get: (target, property) => {
            if (!(property in target)) {
                target[property] = new Folder();
            }
            return target[property];
        }
    })
}

const rootFolder1 = new Folder();
try {
    rootFolder1.ninjaDir.firstNinjaDir.ninjaFile = "yoshi.txt";
    console.log("File stored successfully");
} catch (error) {
    console.log("Failed to stored file.")
}

// Output => File stored successfully