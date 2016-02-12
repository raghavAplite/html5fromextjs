$(document).ready(function()
{
	var containerHeight = (window.innerHeight-91) + "px";
	var homeMainDivHeight = (window.innerHeight-30) + "px";
	if(document.getElementById('content') != null)
	{
		document.getElementById('content').setAttribute("style","height:"+containerHeight);
	}
	if(document.getElementById('adminMainDiv') != null)
	{
		document.getElementById('adminMainDiv').setAttribute("style","height:"+homeMainDivHeight);
	}
});
function checkMe(check)
{
	var checkL = $("#checkL")[0];
	var checkCustom = $("#checkCustom")[0];
	var checkXL = $("#checkXL")[0];

	var terraRow = $(".terraRow")[0];
	var departmentRow = $(".departmentRow")[0];
	var xlRow = $(".xlRow")[0];
	if(check=="L" && checkL.checked==true)
	{
		checkCustom.checked=false;
		checkXL.checked=false;
		terraRow.style.display="none";
		departmentRow.style.display="none";
		xlRow.style.display="none";
	}
	else
	{
		if(check=="Custom")
		{
			if(checkCustom.checked==true)
			{
				checkL.checked=false;
				terraRow.style.display="block";
				departmentRow.style.display="block";
			}
			else
			{
				terraRow.style.display="none";
				departmentRow.style.display="none";
			}
		}
		else if(check=="XL")
		{
			if(checkXL.checked==true)
			{
				checkL.checked=false;
				xlRow.style.display="block";
			}
			else
			{
				xlRow.style.display="none";
			}
		}
	}

	if(checkL.checked==false && checkCustom==false && checkXL==false)
	{
		checkL.checked=true;
	}
}
function changePageData(value)
{
	var divEleonly = $(".divEleonly")[0];
	var divPardCopy = $(".divPardCopy")[0];
	if(value=="Eleonly (PDF)")
	{
		divEleonly.style.display="block";
		divPardCopy.style.display="none";
	}
	else if(value=="Pard Copy")
	{
		divEleonly.style.display="none";
		divPardCopy.style.display="block";
	}
	else
	{
		divEleonly.style.display="none";
		divPardCopy.style.display="none";
	}
}