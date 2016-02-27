$(document)
    .ready(function () {
        var containerHeight = (window.innerHeight - 91) + "px";
        var homeMainDivHeight = (window.innerHeight - 30) + "px";
        if(document.getElementById('content') != null) {
            document.getElementById('content')
                .setAttribute("style", "height:" + containerHeight);
        }
        if(document.getElementById('adminMainDiv') != null) {
            document.getElementById('adminMainDiv')
                .setAttribute("style", "height:" + homeMainDivHeight);
        }
        if(document.getElementById("file_info") !== null) {
            document.getElementById("file_info")
                .disabled = true;
        }
        if(document.getElementById("file_info2") != null) {
            document.getElementById("file_info2")
                .disabled = true;
        }
        if(document.getElementById("file_info") != null) {
            document.getElementById("file_info")
                .style.backgroundColor = "white";
        }
        if(document.getElementById("file_info2")) {
            document.getElementById("file_info2")
                .style.backgroundColor = "white";
        }
        $("#submitMe")
            .click(function () {
                var tab1_besser = document.getElementById("tab1_besser")
                    .value;
                var tab1_presser = document.getElementById("tab1_presser")
                    .value;
                var tab1_contriductor = document.getElementById("tab1_contriductor")
                    .value;
                var tab1_shezang = document.getElementById("tab1_shezang")
                    .value;
                var tab1_Location = document.getElementById("tab1_Location")
                    .value;
                var tab1_Type = document.getElementById("tab1_Type")
                    .value;
                var tab1_Date = document.getElementById("tab1_Date")
                    .value;
                var tab1_bollinger = document.getElementById("tab1_bollinger")
                    .value;
                var tab1_Name = document.getElementById("tab1_Name")
                    .value;
                var tab1_Desc = document.getElementById("tab1_Desc")
                    .value;
                var tab1_das1 = document.getElementById("tab1_das1")
                    .value;
                var tab1_das2 = document.getElementById("tab1_das2")
                    .value;
                var tab1_das3 = document.getElementById("tab1_das3")
                    .value;
                var tab1_das4 = document.getElementById("tab1_das4")
                    .value;
                var tab1_file = document.getElementById("tab1_file")
                    .value;
                var checkL = document.getElementById("checkL")
                    .value;
                var checkCustom = document.getElementById("checkCustom")
                    .value;
                var checkXL = document.getElementById("checkXL")
                    .value;
                var tab2_remaining = document.getElementById("tab2_remaining")
                    .value;
                var tab2_duo = document.getElementById("tab2_duo")
                    .value;
                var tab2_file = document.getElementById("tab2_file")
                    .value;
                var tab2_terra_Overview = document.getElementById("tab2_terraOverview")
                    .value;
                var tab2_terraSlides = document.getElementById("tab2_terraSlides")
                    .value;
                var tab2_terraBiolides = document.getElementById("tab2_terraBiolides")
                    .value;
                var tab2_terraClibilities = document.getElementById("tab2_terraClibilities")
                    .value;
                var tab2_terraCuses = document.getElementById("tab2_terraCuses")
                    .value;
                var tab2_terraDisecery = document.getElementById("tab2_terraDisecery")
                    .value;
                var tab2_terraEnves = document.getElementById("tab2_terraEnves")
                    .value;
                var tab2_terraInech = document.getElementById("tab2_terraInech")
                    .value;
                var tab2_terraFilides = document.getElementById("tab2_terraFilides")
                    .value;
                var tab2_terraLegliance = document.getElementById("tab2_terraLegliance")
                    .value;
                var tab2_terraRelast = document.getElementById("tab2_terraRelast")
                    .value;
                var tab2_terraStrat = document.getElementById("tab2_terraStrat")
                    .value;
                var tab2_terraPerfides = document.getElementById("tab2_terraPerfides")
                    .value;
                var tab2_terraQuanment = document.getElementById("tab2_terraQuanment")
                    .value;
                var tab2_terraRisight = document.getElementById("tab2_terraRisight")
                    .value;
                var tab2_terraTing = document.getElementById("tab2_terraTing")
                    .value;
                var tab2_terraDFclosure = document.getElementById("tab2_terraDFclosure")
                    .value;
                var tab2_terra567 = document.getElementById("tab2_terra567")
                    .value;
                var tab2_terra567Special = document.getElementById("tab2_terra567Special")
                    .value;
                var tab2_terraFixTechnology = document.getElementById("tab2_terraFixTechnology")
                    .value;
                var tab2_terraSecudes = document.getElementById("tab2_terraSecudes")
                    .value;
                var tab2_terraEqnology = document.getElementById("tab2_terraEqnology")
                    .value;
                var tab2_terraTusny = document.getElementById("tab2_terraTusny")
                    .value;
                var tab2_terraRAGER = document.getElementById("tab2_terraRAGER")
                    .value;
                var tab2_terraLoket = document.getElementById("tab2_terraLoket")
                    .value;
                var tab2_terraProcket = document.getElementById("tab2_terraProcket")
                    .value;
                var tab2_terraFRIA = document.getElementById("tab2_terraFRIA")
                    .value;
                var tab2_terraAges = document.getElementById("tab2_terraAges")
                    .value;
                var tab2_terraInterclosures = document.getElementById("tab2_terraInterclosures")
                    .value;
                var tab2_Notes = document.getElementById("tab2_Notes")
                    .value;
                var tab3_FennRequired = document.getElementById("tab3_FennRequired")
                    .value;
                var tab3_ReqDate = document.getElementById("tab3_ReqDate")
                    .value;
                var tab3_ReqTime = document.getElementById("tab3_ReqTime")
                    .value;
                var tab3_EmailTo = document.getElementById("tab3_EmailTo")
                    .value;
                var tab3divPardCopy_ReqDate = document.getElementById("tab3divPardCopy_ReqDate")
                    .value;
                var tab3divPardCopy_ReqTime = document.getElementById("tab3divPardCopy_ReqTime")
                    .value;
                var tab3divPardCopy_EmailTo = document.getElementById("tab3divPardCopy_EmailTo")
                    .value;
                var tab3divPardCopy_CopiesTR = document.getElementById("tab3divPardCopy_CopiesTR")
                    .value;
                var tab3divPardCopy_Paper = document.getElementById("tab3divPardCopy_Paper")
                    .value;
                var tab3divPardCopy_Print = document.getElementById("tab3divPardCopy_Print")
                    .value;
                var tab3divPardCopy_FnType = document.getElementById("tab3divPardCopy_FnType")
                    .value;
                var tab3divPardCopyBooks = document.getElementById("tab3divPardCopyBooks")
                    .value;
                var tab3divPardCopy_Deliverydate = document.getElementById("tab3divPardCopy_Deliverydate")
                    .value;
                var tab3divPardCopy_Timerequried = document.getElementById("tab3divPardCopy_Timerequried")
                    .value;
                var tab3divPardCopy_Contactperson = document.getElementById("tab3divPardCopy_Contactperson")
                    .value;
                var tab3divPardCopy_Type = document.getElementById("tab3divPardCopy_Type")
                    .value;
                var tab3divPardCopy_terrwe = document.getElementById("tab3divPardCopy_terrwe")
                    .value;
                var tab3divPardCopyoftupp = document.getElementById("tab3divPardCopyoftupp")
                    .value;
                var tab3divPardCopy_Arrivebydate = document.getElementById("tab3divPardCopy_Arrivebydate")
                    .value;
                var tab3divPardCopy_Arrivebytime = document.getElementById("tab3divPardCopy_Arrivebytime")
                    .value;
                var tab3divPardCopy_qqname = document.getElementById("tab3divPardCopy_qqname")
                    .value;
                var tab3divPardCopy_Contactnumber = document.getElementById("tab3divPardCopy_Contactnumber")
                    .value;
                var tab3divPardCopy_Contactname = document.getElementById("tab3divPardCopy_Contactname")
                    .value;
                var tab3divPardCopy_Contactaddress = document.getElementById("tab3divPardCopy_Contactaddress")
                    .value;
                var tab3divPardCopy_SuiteFloor = document.getElementById("tab3divPardCopy_SuiteFloor")
                    .value;
                var tab3divPardCopy_CitystateZip = document.getElementById("tab3divPardCopy_CitystateZip")
                    .value;

                var dataString = 'tab1_besser=' + tab1_besser + '&tab1_presser=' + tab1_presser + '&tab1_contriductor=' + tab1_contriductor + '&tab1_shezang=' + tab1_shezang + '&tab1_Location=' + tab1_Location + '&tab1_Type=' + tab1_Type + '&tab1_Date=' + tab1_Date + '&tab1_bollinger=' + tab1_bollinger + '&tab1_Name=' + tab1_Name + '&tab1_Desc=' + tab1_Desc + '&tab1_das1=' + tab1_das1 + '&tab1_das2=' + tab1_das2 + '&tab1_das3=' + tab1_das3 + '&tab1_das4=' + tab1_das4 + '&tab1_file=' + tab1_file + '&checkL=' + checkL + '&checkCustom=' + checkCustom + '&checkXL=' + checkXL + '&tab2_remaining=' + tab2_remaining + '&tab2_duo=' + tab2_duo + '&tab2_file=' + tab2_file + '&tab2_terraOverview=' + tab2_terraOverview + '&tab2_terraSlides=' + tab2_terraSlides + '&tab2_terraBiolides=' + tab2_terraBiolides + '&tab2_terraClibilities=' + tab2_terraClibilities + '&tab2_terraCuses=' + tab2_terraCuses + '&tab2_terraDisecery=' + tab2_terraDisecery + '&tab2_terraEnves=' + tab2_terraEnves + '&tab2_terraInech=' + tab2_terraInech + '&tab2_terraFilides=' + tab2_terraFilides + '&tab2_terraLegliance=' + tab2_terraLegliance + '&tab2_terraRelast=' + tab2_terraRelast + '&tab2_terraStrat=' + tab2_terraStrat + '&tab2_terraPerfides=' + tab2_terraPerfides + '&tab2_terraQuanment=' + tab2_terraQuanment + '&tab2_terraRisight=' + tab2_terraRisight + '&tab2_terraTing=' + tab2_terraTing + '&tab2_terraDFclosure=' + tab2_terraDFclosure + '&tab2_terra567=' + tab2_terra567 + '&tab2_terra567Special=' + tab2_terra567Special + '&tab2_terraFixTechnology=' + tab2_terraFixTechnology + '&tab2_terraSecudes=' + tab2_terraSecudes + '&tab2_terraEqnology=' + tab2_terraEqnology + '&tab2_terraTusny=' + tab2_terraTusny + '&tab2_terraRAGER=' + tab2_terraRAGER + '&tab2_terraLoket=' + tab2_terraLoket + '&tab2_terraProcket=' + tab2_terraProcket + '&tab2_terraFRIA=' + tab2_terraFRIA + '&tab2_terraAges=' + tab2_terraAges + '&tab2_terraInterclosures=' + tab2_terraInterclosures + '&tab2_Notes=' + tab2_Notes + '&tab3_FennRequired=' + tab3_FennRequired + '&tab3_ReqDate=' + tab3_ReqDate + '&tab3_ReqTime=' + tab3_ReqTime + '&tab3_EmailTo=' + tab3_EmailTo + '&tab3divPardCopy_ReqDate=' + tab3divPardCopy_ReqDate + '&tab3divPardCopy_ReqTime=' + tab3divPardCopy_ReqTime + '&tab3divPardCopy_EmailTo=' + tab3divPardCopy_EmailTo + '&tab3divPardCopy_CopiesTR=' + tab3divPardCopy_CopiesTR + '&tab3divPardCopy_Paper=' + tab3divPardCopy_Paper + '&tab3divPardCopy_Print=' + tab3divPardCopy_Print + '&tab3divPardCopy_FnType=' + tab3divPardCopy_FnType + '&tab3divPardCopyBooks=' + tab3divPardCopyBooks + '&tab3divPardCopy_Deliverydate=' + tab3divPardCopy_Deliverydate + '&tab3divPardCopy_Timerequried=' + tab3divPardCopy_Timerequried + '&tab3divPardCopy_Contactperson=' + tab3divPardCopy_Contactperson + '&tab3divPardCopy_Type=' + tab3divPardCopy_Type + '&tab3divPardCopy_terrwe=' + tab3divPardCopy_terrwe + '&tab3divPardCopyoftupp=' + tab3divPardCopyoftupp + '&tab3divPardCopy_Arrivebydate=' + tab3divPardCopy_Arrivebydate + '&tab3divPardCopy_Arrivebytime=' + tab3divPardCopy_Arrivebytime + '&tab3divPardCopy_qqname=' + tab3divPardCopy_qqname + '&tab3divPardCopy_Contactnumber=' + tab3divPardCopy_Contactnumber + '&tab3divPardCopy_Contactname=' + tab3divPardCopy_Contactname + '&tab3divPardCopy_Contactaddress=' + tab3divPardCopy_Contactaddress + '&tab3divPardCopy_SuiteFloor=' + tab3divPardCopy_SuiteFloor + '&tab3divPardCopy_CitystateZip=' + tab3divPardCopy_CitystateZip;

                $.ajax({
                    url: "response.php",
                    data: dataString,
                    cache: false,
                    success: function (result) {
                        alert(result);
                        document.getElementById("idForm")
                            .reset();

                    }
                });
            });

        $(".radGroup1")
            .click(function () {
                this.previousElementSibling.click()
            });

        var url = "resources/products.xml";
        var source = {
            datatype: "xml",
            datafields: [{
                name: 'Name',
                type: 'string'
        }, {
                name: 'Assignee',
                type: 'string'
        }, {
                name: 'Host',
                type: 'string'
        }, {
                name: 'Date',
                type: 'string'
        }, {
                name: 'Vehicle',
                type: 'string'
        }, {
                name: 'Products',
                type: 'string'
        }, {
                name: 'P_C',
                type: 'string'
        }, {
                name: 'Type',
                type: 'string'
        }],
            root: "data",
            record: "record",
            id: 'recordId',
            url: url
        };
        if(typeof $.jqx != "undefined") {
            var dataAdapter = new $.jqx.dataAdapter(source);
            $("#jqxgrid1")
                .jqxGrid({
                    width: window.innerWidth - 43,
                    source: dataAdapter, 
                    autoheight: true,
                    sortable: true,
                    altrows: true,
                    editable: true,
                    columns: [{
                        text: 'Name',
                        datafield: 'Name',
                        align: 'left',
                        cellsalign: 'left',
                        width: getWidth('7.5'),
                        editable: false
            }, {
                        text: 'Assignee',
                        datafield: 'Assignee',
                        cellsalign: 'left',
                        align: 'left',
                        width: getWidth('7.5'),
                        editable: true,
                        columntype: 'dropdownlist',
                        value:{
                            '1': ''
                        }

            }, {
                        text: 'Host(s)',
                        datafield: 'Host',
                        align: 'left',
                        cellsalign: 'left',
                        cellsformat: 'c2',
                        width: getWidth('20.8'),
                        editable: false
            }, {
                        text: 'Date',
                        datafield: 'Date',
                        cellsalign: 'left',
                        align: 'left',
                        width: getWidth('7.5'),
                        editable: false
            }, {
                        text: 'Vehicle',
                        datafield: 'Vehicle',
                        align: 'left',
                        cellsalign: 'left',
                        width: getWidth('7.5'),
                        editable: false
            }, {
                        text: 'Products(s)',
                        datafield: 'Products',
                        align: 'left',
                        cellsalign: 'left',
                        width: getWidth('20.7'),
                        editable: false
            }, {
                        text: 'P/C',
                        datafield: 'P_C',
                        align: 'left',
                        cellsalign: 'left',
                        width: getWidth('20.7'),
                        editable: false
            }, {
                        text: 'Type',
                        datafield: 'Type',
                        align: 'left',
                        cellsalign: 'left',
                        width: getWidth('7.5'),
                        editable: false
            }]
                });
            $("#jqxgrid2")
                .jqxGrid({
                    width: window.innerWidth - 43,
                    source: dataAdapter,
                    autoheight: true,
                    sortable: true,
                    altrows: true,
                    editable: true,
                    columns: [{
                        text: 'Name',
                        datafield: 'Name',
                        align: 'left',
                        cellsalign: 'left',
                        width: getWidth('7.5'),
                        editable: false
            }, {
                        text: 'Assignee',
                        datafield: 'Assignee',
                        cellsalign: 'left',
                        align: 'left',
                        width: getWidth('7.5'),
                        editable: true,
                        columntype: 'dropdownlist'
            }, {
                        text: 'Host(s)',
                        datafield: 'Host',
                        align: 'left',
                        cellsalign: 'left',
                        cellsformat: 'c2',
                        width: getWidth('20.8'),
                        editable: false
            }, {
                        text: 'Date',
                        datafield: 'Date',
                        cellsalign: 'left',
                        align: 'left',
                        width: getWidth('7.5'),
                        editable: false
            }, {
                        text: 'Vehicle',
                        datafield: 'Vehicle',
                        align: 'left',
                        cellsalign: 'left',
                        width: getWidth('7.5'),
                        editable: false
            }, {
                        text: 'Products(s)',
                        datafield: 'Products',
                        align: 'left',
                        cellsalign: 'left',
                        width: getWidth('20.7'),
                        editable: false
            }, {
                        text: 'P/C',
                        datafield: 'P_C',
                        align: 'left',
                        cellsalign: 'left',
                        width: getWidth('20.7'),
                        editable: false
            }, {
                        text: 'Type',
                        datafield: 'Type',
                        align: 'left',
                        cellsalign: 'left',
                        width: getWidth('7.5'),
                        editable: false
            }]
                });

            $("#jqxgrid3")
                .jqxGrid({
                    width: window.innerWidth - 43,
                    source: dataAdapter,
                    autoheight: true,
                    sortable: true,
                    altrows: true,
                    editable: true,
                    columns: [{
                        text: 'Name',
                        datafield: 'Name',
                        align: 'left',
                        cellsalign: 'left',
                        width: getWidth('7.5'),
                        editable: false
            }, {
                        text: 'Assignee',
                        datafield: 'Assignee',
                        cellsalign: 'left',
                        align: 'left',
                        width: getWidth('7.5'),
                        editable: true,
                        columntype: 'dropdownlist'
            }, {
                        text: 'Host(s)',
                        datafield: 'Host',
                        align: 'left',
                        cellsalign: 'left',
                        cellsformat: 'c2',
                        width: getWidth('20.8'),
                        editable: false
            }, {
                        text: 'Date',
                        datafield: 'Date',
                        cellsalign: 'left',
                        align: 'left',
                        width: getWidth('7.5'),
                        editable: false
            }, {
                        text: 'Vehicle',
                        datafield: 'Vehicle',
                        align: 'left',
                        cellsalign: 'left',
                        width: getWidth('7.5'),
                        editable: false
            }, {
                        text: 'Products(s)',
                        datafield: 'Products',
                        align: 'left',
                        cellsalign: 'left',
                        width: getWidth('20.7'),
                        editable: false
            }, {
                        text: 'P/C',
                        datafield: 'P_C',
                        align: 'left',
                        cellsalign: 'left',
                        width: getWidth('20.7'),
                        editable: false
            }, {
                        text: 'Type',
                        datafield: 'Type',
                        align: 'left',
                        cellsalign: 'left',
                        width: getWidth('7.5'),
                        editable: false
            }]
                });

            function getWidth(width) {
                return((window.innerWidth - 40) * width) / 100;
            }
        }
    });


function checkMe(check) {
    var checkL = $("#checkL")[0];
    var checkCustom = $("#checkCustom")[0];
    var checkXL = $("#checkXL")[0];

    var terraRow = $(".terraRow")[0];
    var departmentRow = $(".departmentRow")[0];
    var xlRow = $(".xlRow")[0];
    if(check == "L" && checkL.checked == true) {
        checkCustom.checked = false;
        checkXL.checked = false;
        terraRow.style.display = "none";
        departmentRow.style.display = "none";
        xlRow.style.display = "none";
    } else {
        if(check == "Custom") {
            if(checkCustom.checked == true) {
                checkL.checked = false;
                terraRow.style.display = "block";
                departmentRow.style.display = "block";
            } else {
                terraRow.style.display = "none";
                departmentRow.style.display = "none";
            }
        } else if(check == "XL") {
            if(checkXL.checked == true) {
                checkL.checked = false;
                xlRow.style.display = "block";
            } else {
                xlRow.style.display = "none";
            }
        }
    }

    if(checkL.checked == false && checkCustom == false && checkXL == false) {
        checkL.checked = true;
    }
}

function changePageData(value) {
    var divEleonly = $(".divEleonly")[0];
    var divPardCopy = $(".divPardCopy")[0];
    if(value == "Eleonly (PDF)") {
        divEleonly.style.display = "block";
        divPardCopy.style.display = "none";
    } else if(value == "Pard Copy") {
        divEleonly.style.display = "none";
        divPardCopy.style.display = "block";
    } else {
        divEleonly.style.display = "none";
        divPardCopy.style.display = "none";
    }
}