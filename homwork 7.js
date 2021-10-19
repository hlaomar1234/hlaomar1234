<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=
     initial-scale=1.0">
    <title>homwork7</title>
    <style>
    .jarosalem{
        display: flex;
        border: 1px solid black;
        padding: 10px;
        justify-content: first baseline;
        align-items: center;
        flex-direction: column;
        text-align : center;
        
    }
    .h1{
        text-align : center;
        font-size: large;
        font-family: 'Courier New', Courier, monospace;
        }
        .jarosalem div{
            padding: 10px;
            border: 1px solid black;
            align-items: center;
            flex-wrap: wrap-reverse;
        }
        .imgscres{
            display: flex;
            border: 1px solid blueviolet;
        }
        .flexd_box_container {
            border: 1px solid yellow;
             padding: 20px;
             box-shadow: 0px 10px 50px black;
        }

    </style>
</head>
<body>
    
    <div class="jarosalem">
        <h1>اهلا وسهل</h1>
        <div>
            <button class="button" id="pic" onclick="jarosalem()" style=" background-color: rgb(243, 128, 214); font-size: 4ch; font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif; "> click </button>
        </div>
        <div class="flexd_box_container "  id="cat-generate" >
            <img src="https://tenor.com/view/bear-love-gif-11844872.gif">
            </div>
        </div>
        
    </div>
    
    <div class="text-centre2" id="lex-cat-gen'"></div>
    <script>
        function jarosalem(){
    var image = document.createElement('img');
    var div = document.getElementById('cat-generate');
    image.src=" https://tenor.com/view/bear-love-gif-11844872.gif";
    div.appendChild(image);
}
    </script>
</body>
</html>
