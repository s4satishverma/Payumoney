jQuery(function(){jQuery("#name").validate({expression:"if (VAL) return true; else return false;",message:"Please enter the name"});jQuery("#email").validate({expression:"if (VAL) return true; else return false;",message:"Please enter the name"});jQuery("#month").validate({expression:"if (VAL != '') return true; else return false;",message:"Please make a selection"});jQuery("#date").validate({expression:"if (VAL != '') return true; else return false;",message:"Please make a selection"});jQuery("#year").validate({expression:"if (VAL != '') return true; else return false;",message:"Please make a selection"});jQuery("#gender").validate({expression:"if (VAL != '') return true; else return false;",message:"Please make a selection"});jQuery("#city").validate({expression:"if (VAL != '') return true; else return false;",message:"Please make a selection"});jQuery("#phone").validate({expression:"if (VAL.match(/^[7-9][0-9]{9}$/)) return true; else return false;",message:"Please enter a valid number"});});