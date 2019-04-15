function newJob(){
  document.getElementById("dat").innerHTML = '<form><label for="name"><b>Name</b></label><input type="text" placeholder="Enter Name" name="name" required><div class="center"><label for="description"><b>Job Description</b></label><textarea rows="20" style="width: 100%" required>Description of the job to be completed; rewards; etc...</textarea><button type="submit" style="width: 100%" onclick"submitJob()">Submit Job</button></div></form>';
}

function submitJob(){
  document.getElementById("dat").innerHTML = '<button class="bigButton" type="button" style="float: left;" onclick="newJob()">Submit New Job</button><button class="bigButton" type="button" style="float: right;" onclick="viewJobs()">Bid On Jobs</button>';
  file = fopen("./data.txt", 0);
  if(file!=-1) alert("File Opened.");
  fclose(file);
}

function viewJobs(){
  alert("World");
}
