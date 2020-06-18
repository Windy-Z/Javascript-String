// 获取当前选中输入的内容长度
function getCheckedContentLength(obj1, obj2){
	if(obj1[0].checked){
		return obj2[0].value.length;
	}else{
		return obj2[1].value.length;
	}
};

// 当前选中输入中的第三个字符
function getCheckedThird(obj1, obj2){
	if(obj1[0].checked){
		return obj2[0].value[2];
	}else{
		return obj2[1].value[2];
	}
};

// 把两个输入框的文字连接在一起输出
function concatContents(obj){
	return obj[0].value.concat(obj[1].value);
};

// 输入B中的内容，在输入A的内容中第一次出现的位置
function BindexOfA(obj){
	return obj[0].value.indexOf(obj[1].value);
};

// 输入A中的内容，在输入B的内容中最后一次出现的位置
function AlastIndexOfB(obj){
	return obj[1].value.lastIndexOf(obj[0].value);
};

// 把所选输入框中的内容全部转成大写
function CheckedContentToUpperCase(obj1, obj2){
	if(obj1[0].checked){
		return obj2[0].value = obj2[0].value.toUpperCase();

	}else{
		return obj2[1].value = obj2[1].value.toUpperCase();
	}
};

// 把所选输入框中的内容全部转成小写
function CheckedContentToLowerCase(obj1, obj2){
	if(obj1[0].checked){
		return obj2[0].value = obj2[0].value.toLowerCase();

	}else{
		return obj2[1].value = obj2[1].value.toLowerCase();
	}
};

//把所选输入框中内容的空格全部去除
function clearBlank(obj1, obj2){
	if(obj1[0].checked){
		return obj2[0].value = obj2[0].value.replace(/\s*/g,"");
	}else{
		return obj2[1].value = obj2[1].value.replace(/\s*/g,"");
	}
};

// 把所选输入框中内容的a全部替换成另外一个输入框的内容
function replaceCheckedContent(obj1, obj2){
	if(obj1[0].checked){
		return obj2[0].value = obj2[0].value.replace(/a/g, obj2[1].value);

	}else{
		return obj2[1].value = obj2[1].value.replace(/a/g, obj2[0].value);
	}
};


window.onload = function(){
	var input = document.querySelectorAll('input');
	var result;
	var btns = document.querySelectorAll("button");
	var textarea = document.querySelectorAll('textarea');
	var res = document.getElementById('result');

	for (var i=0; i<btns.length; i++) {
		var btn = btns[i];
		btn.onclick = function(){
			switch(this.textContent){
				case '获取当前选中输入的内容长度':
					result = getCheckedContentLength(input, textarea);
					console.log(result);
					break;
				case '当前选中输入中的第3个字符':
					result = getCheckedThird(input, textarea);
					break;
				case '把两个输入框的文字连接在一起输出（concat）':
					result = concatContents(textarea);
					break;
				case '输入B中的内容，在输入A的内容中第一次出现的位置（indexOf）':
					result = BindexOfA(textarea);
					break;
				case '把所选输入框中的内容全部转为大写':
					result = CheckedContentToUpperCase(input, textarea);
					break;
				case '把所选输入框中的内容全部转为小写':
					result = CheckedContentToLowerCase(input, textarea);
					break;
				case '把所选输入框中内容的空格全部去除':
					result = clearBlank(input, textarea);
					break;
				case '把所选输入框中内容的a全部替换成另外一个输入框中的内容':
					result = replaceCheckedContent(input, textarea);
					break;
			}
		console.log(result);
		res.innerHTML = result;
		};
    }
    

};


// function getCheckedContentLength(obj1, obj2){
// 	if(obj1[0].checked){
// 		return obj2[0].value.length;
// 	}else{
// 		return obj2[1].value.length;
// 	}
// };
// var input = document.querySelectorAll('input');
// var result;
// var btns = document.querySelectorAll("button");
// var textarea = document.querySelectorAll('textarea');
// var res = document.getElementById('result');
// result = getCheckedContentLength(input, textarea);
// console.log(result);