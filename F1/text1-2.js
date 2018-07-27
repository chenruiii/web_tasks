function getAllItems() { //获取所有内存中的信息并打印
	var text = "";
	var i = 0;
	var length = localStorage.length-1;
	for(i = 0;i <= length;i++){
		var itemKey = localStorage.key(i);
		var values = localStorage.getItem(itemKey);
		values = values.split(";");
		if(itemKey !="temp")
			text += '<tr>' + '<td>' + values[0] + '</td>' + '<td>' + values[1] +'</td>' + '<td>' + values[2] + '</td>' + '<td>' + values[3] +'</td>'+ '<td><button id="'+itemKey +'" class="delete" >x</button></td>'+ '</tr>';
	}
	//显示内存中的学生内容
	$("#show").html(text);
	deleteItem();
}

function searchItems(stuId) { //获取指定查询的记录
	//var text = "";
	var i = 0;	       
	var length = localStorage.length-1;
	var itemKey = localStorage.key(0);
	var values = localStorage.getItem(itemKey);
	for(i = 0;i <= length;i++){

		var itemKey = localStorage.key(i);
		var values = localStorage.getItem(itemKey);
		values = values.split(";");
		if(values[1]==stuId.toString()){
			// text += '<tr>' + '<td>' + values[0] + '</td>' + '<td>' + values[1] +'</td>' + '<td>' + values[2] + '</td>' + '<td>' + values[3] +'</td>'+ '<td><button id="'+itemKey +'" class="delete" >x</button></td>'+ '</tr>';
			alert("姓名："+values[0]+"学号："+values[1]+"性别："+values[2]+"年级："+values[3]);
			break;
		}

		console.log("fail");
	}
	//显示查询到的学生内容
	//$("#search").html(text);
	
	deleteItem();
}
//没写好的修改功能
function reviseItem(stuId){
	var text = "";
	var i = 0;	
	var tempvalues = new Array();       
	var length = localStorage.length-1;
	var itemKey = localStorage.key(0);
	var values = localStorage.getItem(itemKey);
	for(i = 0;i <= length;i++){
		var itemKey = localStorage.key(i);
		var values = localStorage.getItem(itemKey);
		values = values.split(";");
		if(values[1]==stuId.toString()){
			//$("#m-stuName']").val(values[0]);
			// $("input[name='stuId']").val() = values[1];
			// $("input[name='sex']").val() = values[2];
			// $("select[name='cla']").val() = values[3];
			
			var stuName = values[0];
			var stuId = values[1]
			var sex = values[2];
			var cla = values[3];
			tempvalues.push(stuName);
			tempvalues.push(stuId);
			tempvalues.push(sex);
			tempvalues.push(cla);
			localStorage.removeItem(itemKey);
			try{
				localStorage.setItem(temp,tempvalues.join(';'));
			} catch(e){
				if(e == QUOTA_EXCEEDED_ERR){
					alert("Quota exceeded!");
				}
				getAllItems();
			}
			break;
		}
		console.log("fail");

		//$("#m-addForm").html(JSON.stringify(tempvalues));
	}
}

function deleteItem(){
	$(".delete").click(function(){
		var id = $(this).attr("id");
		localStorage.removeItem(id);
		getAllItems();
	});
}

$(document).ready(function(){
	if(typeof(localStorage) == 'undefined'){
		alert('WA');
	}
	else{
		getAllItems();
		$("#addForm").submit(function() {
			/* Act on the event */
			var newDate = new Date();
			var itemId = newDate.getTime();
			var values = new Array();
			var stuName = $("input[name='stuName']").val();
			var stuId = $("input[name='stuId']").val();
			var sex = $("input[name='sex']").val();
			var cla = $("select[name='cla']").val();
			values.push(stuName);
			values.push(stuId);
			values.push(sex);
			values.push(cla);
			try{
				localStorage.setItem(itemId,values.join(';'));
			} catch(e){
				if(e == QUOTA_EXCEEDED_ERR){
					alert("Quota exceeded!");
				}
				getAllItems();
			}
		});
		$("#findForm").submit(function() {
			var stuId = $("input[name='stuId1']").val();
			searchItems(stuId);
		});
		$("#clear").click(function(){
			localStorage.clear();
			getAllItems();
		});
		$("#revise").click(function(){
			var stuId = $("input[name='stuId1']").val();
			//reviseItem(stuId);
			var i = 0;	       
			var length = localStorage.length-1;
			var itemKey = localStorage.key(0);
			var id = localStorage.key(0);
			var values = localStorage.getItem(itemKey);
			for(i = 0;i <= length;i++){
				var itemKey = localStorage.key(i);
				var values = localStorage.getItem(itemKey);
				values = values.split(";");
				if(values[1]==stuId.toString()){
					localStorage.removeItem(itemKey);
					break;
				}
			}
			
			$("#m-submit").click(function() {
				/* Act on the event */
				var newDate = new Date();
				var itemId = newDate.getTime();
				var values = new Array();
				var stuName = $("input[name='m-stuName']").val();
				var stuId = $("input[name='m-stuId']").val();
				var sex = $("input[name='m-sex']").val();
				var cla = $("select[name='m-cla']").val();
				values.push(stuName);
				values.push(stuId);
				values.push(sex);
				values.push(cla);
				try{
					localStorage.setItem(itemId,values.join(';'));
				} catch(e){
					if(e == QUOTA_EXCEEDED_ERR){
						alert("Quota exceeded!");
					}
					getAllItems();
				}
				alert("The massage has been revised!");
				getAllItems();
			});
		})
	}
})