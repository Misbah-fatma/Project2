
hbspt.forms.create({
  region: "eu1",
  portalId: "25290909",
  formId: "3563828c-4a52-433c-b33e-8b8efac8b43a",
  onFormSubmit: function($form) {
      // Serialize the form data.
      var formData = $form.serialize();
      var data = formData.split("&");
      data1=data[0];
      data2=data[1];
      data3=data[2];
      var dataname = data1.split("=");
      var dataemail = data2.split("=");
      var dataphone = data3.split("=");
      var name=dataname[1];
      var email=dataemail[1];
      var phone=dataphone[1];
      window.sessionStorage.setItem('Sessionname', name);
      window.sessionStorage.setItem('Sessionemail', email);
      window.sessionStorage.setItem('Sessionphone', phone);
      $('#hiddenpopupdata').html('<input type="hidden" id="hidden_name_id" value="'+window.sessionStorage.getItem('Sessionname')+'"><input type="hidden" id="hidden_email_id" value="'+window.sessionStorage.getItem('Sessionemail')+'"> <input type="hidden" id="hidden_phone_id" value="'+window.sessionStorage.getItem('Sessionphone')+'">');
      add_ip_track(name,email,phone);
  }
});



hbspt.forms.create({
  region: "eu1",
  portalId: "25290909",
  formId: "f1918c09-8b60-4bab-a691-f23051353ca9"
});




hbspt.forms.create({
region: "eu1",
portalId: "25290909",
formId: "499472de-0fe1-4893-adfb-94162b6bcf8e"
});



  hbspt.forms.create({
    region: "eu1",
    portalId: "25290909",
    formId: "8c6bc214-40f4-4600-968b-a9103c1ba4d2"
  });



$('.border_animate').delay(5000).animate({
width: '100%'
}, 1000);

   function videopopup(url){
       var desc=$('#express_description').val();
        Swal.fire({
            title: '',
            text: '',
            html:'<div className="row padding50"><div className="col-md-6"><iframe src="'+url+'" height="300" width="100%" title="video"></iframe></div><div className="col-md-6"><h2 style="text-align:left">SGA Expressions</h2><p style="text-align:left">'+desc+'</p></div></div>',
            imageAlt: '',
            showCancelButton: false,
showConfirmButton: false,
cancelButtonText: "Close",
        })
   }
   
   var c='false';
   var numbers_targetOffset = $("#numbers_scroll").offset().top;
const counters = document.querySelectorAll('.counter_number');
var $s = $(window).scroll(function () {
    if (($s.scrollTop()) > numbers_targetOffset-300) {
        if(c=='false'){
        for (let n of counters) {
            const updateCount = () => {
                const target = +n.getAttribute('data-target');
                const count = +n.innerText;
                const speed = 50000; // change animation speed here
                const inc = target / speed;
                if (count < target) {
                    n.innerText = Math.ceil(count + inc);
                    setTimeout(updateCount, 1);
                } else {
                    n.innerText = target;
                }
                c='true';
            }
            updateCount();
            
        }
        }
    }

});


