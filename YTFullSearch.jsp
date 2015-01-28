<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>YTFullSearch</title>
    <style type="text/css">

    /* the frame*/

    #searchCenter{
    width: 100%;
    }
    #searchTabs{
    width: 200px;
    float:left;
    background-color: #EFEFEF;
    }
    #searchFrame{
    margin-left: 200px;
    z-index: 2;
    position: relative;
    }
   
    /*the button */
    
    .button.small {
	line-height: 21px;
	text-decoration: none;
	font-size: 11px;
	border-radius: 3px;
	text-align: center;
	cursor: pointer;
	padding-left: 5px;
	padding-right: 5px;
	margin-right: 5px;
	margin-top: 2px;
	}
	.button.primary {
	background-color: #2bb24c;
	color: #FFFFFF;
	}
	.button {
	background-color: #F4F4F4;
	color: #696969;
	display: inline-block;
	line-height: 34px;
	text-decoration: none;
	font-size: 13px;
	border-radius: 3px;
	text-align: center;
	cursor: pointer;
	padding-left: 17px;
	padding-right: 17px;
	margin-right: 10px;
	}
    </style>
    <script src="scripts/jquery-latest.js" type="text/javascript"></script>
    <script type="text/javascript">
    $(document).ready(function(){
    $("#searchButton").click(function(){
		    // alert("TEST");
		    });
     });
    </script>
</head>
<body>
   <div id="searchCenter">
   	<div id="searchTabs">Search Part
   		<input type="text"></input>
    <div id="searchButton" class="button primary small" style="float:right; background-color:#F60; margin-top:5px">Search</div>
   	</div>
   	<div id="searchFrame"><table>
   		<tr>
   			<td>header1</td>
   			<td>header2</td>
   			<td>header3</td>
   			<td>header4</td>
   			<td>header5</td>
   		</tr>
   		<tr>
   			<td>header1</td>
   			<td>header2</td>
   			<td>header3</td>
   			<td>header4</td>
   			<td>header5</td>
   		</tr>
   		<tr>
   			<td>header1</td>
   			<td>header2</td>
   			<td>header3</td>
   			<td>header4</td>
   			<td>header5</td>
   		</tr>
   		<tr>
   			<td>header1</td>
   			<td>header2</td>
   			<td>header3</td>
   			<td>header4</td>
   			<td>header5</td>
   		</tr>
   		<tr>
   			<td>header1</td>
   			<td>header2</td>
   			<td>header3</td>
   			<td>header4</td>
   			<td>header5</td>
   		</tr>
   	</table></div>
   </div>
</body>
</html>