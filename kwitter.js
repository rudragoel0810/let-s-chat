function adduser()
{
    username=document.getElementById("name").value;
    localStorage.setItem("user_name",username);
    window.location="kwitter_room.html";
}