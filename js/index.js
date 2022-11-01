/*  PROCESS: 
     1. lấy input km, tg chờ
        loại xe: dom 3 input RadioNodeList, if input.checked ===true 
        vd grabType = 1 , grabType =2 , grabType=3
    2. Tìm bảng giá ( var p1,p2,p3,p4), kiểm tra loại xe
        vd : grabType=1, p1=8000 , p2 = 7500 , p3 = 7000 , p4 = 2000
    3. tính tiền 
        tổng tiền = tiền km + tiền chờ ( Math.floor(tg chờ/3)*giá)
    4. In tổng tiền, tìm trên giao diện, có div id=divThanhTien, display nó lên và đổ tổng tiền tính được vào span 
*/

// giải theo chiều dọc - ko giải theo chiều ngang của bảng table 
function calcTaxiFee() {
    var divThanhTien = document.getElementById('divThanhTien');
    var xuatTien = document.getElementById('xuatTien');

    var grabCar = document.getElementById('grabCar');
    var grabSUV = document.getElementById('grabSUV');
    var grabBlack = document.getElementById('grabBlack');
    var grabType;

    var p1;
    var p2;
    var p3;
    var p4;

    // cách để nhập số vào ô input 
    // Cách 1 
    var numberOfKm = Number(document.getElementById('numberOfKm').value);
    // C2 var numberOfKm =  +document.getElementById('numberOfKm').value;
    // C3 var numberOfKm = document.getElementById('numberOfKm').value*1;
    // kiểm tra bằng cách nhập số, chữ vào ô input và console ra màn hình 
    // không phải số nó hiển thị NaN 
    var timeWaiting = document.getElementById('timeWaiting').value * 1;
    
    var feeByKm=0;
    var feeByWaiting=0;
    var totalFee=0;
    

    //   4 trường hợp chứ ko phải 3.
    if (grabCar.checked) grabType = 1;
    // C2 : if ( grabCar.checked === true ) grabType=1;
    else if (grabSUV.checked) grabType = 2;
    else if (grabBlack.checked) grabType = 3;
    else{
        alert('Vui lòng chọn loại xe')
        return;
    }
    if(numberOfKm===0) {
        alert('Vui lòng nhập số km');
        return;
    }
    if(timeWaiting===0){
        alert('Vui lòng nhập số thời gian chờ');
        return;
    }

    if (grabType === 1) {
        p1 = 8000;
        p2 = 7500;
        p3 = 7000;
        p4 = 2000
    } else if (grabType === 2) {
        p1 = 9000;
        p2 = 8500;
        p3 = 8000;
        p4 = 3000
    } else {
        p1 = 10000;
        p2 = 9500;
        p3 = 9000;
        p4 = 3500;
    }

    if(numberOfKm<=1){
        feeByKm=p1;
    }else if(numberOfKm>1 && numberOfKm<=19){
        feeByKm=p2
    }else if(numberOfKm>19){
        feeByKm=p3
    }
    if(timeWaiting>=3){
        feeByWaiting=Math.floor(timeWaiting/3)*p4;
    }

    totalFee=feeByWaiting + feeByKm;
    divThanhTien.style.display='block';
    xuatTien.innerHTML=totalFee;

}