<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>
<script>
$("#submitt").click(function() {
 alert("hi");

    var url = "ajax.php";
    $.ajax({
           type: "POST",
           url: url,
           data: $("#idForm").serialize(),
           success: function(data) {
               alert(data);
           }
         });

    return false;
});
</script>

<form id="idForm">
    <input type="text" id="name"/>
    <button id="submitt">SUBMIT</button>
</form>