function printDiv(tizarForm){
			var printContents = document.getElementById(tizarForm).innerHTML;
			var originalContents = document.body.innerHTML;
			document.body.innerHTML = printContents;
			window.print();
			document.body.innerHTML = originalContents;
		}