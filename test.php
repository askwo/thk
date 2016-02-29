<?php

if(empty($_FILES['photo']['name']))
	{
		$newpicname="";
	}
	else
	{
	
	//图片上传
    $date=date('Ymdhis');//得到当前时间,如;20070705163148
    $name=explode('.',$_FILES['photo']['name']);//将文件名以'.'分割得到后缀名,得到一个数组
    $newpicname=$date.'.'.$name[1];//得到一个新的文件为'20070705163148.jpg',即新的路径
    $path='uploadfile/'.$newpicname;
    $ups=move_uploaded_file($_FILES['photo']['tmp_name'],$path);
   }
   

	?>
