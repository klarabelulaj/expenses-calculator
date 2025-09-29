let total = 0;
        function shtoShpenzim() {
            const qera = parseFloat(document.getElementById("qera").value) || 0;
            const ushqim = parseFloat(document.getElementById("ushqimet").value) || 0 ;
            const transport = parseFloat(document.getElementById("transport").value) || 0 ;
            const tjera = parseFloat(document.getElementById("tjera").value) || 0;

            if (qera === 0 || ushqim === 0 || transport === 0 || tjera === 0) {
                alert("Ju lutem plotesoni fushat me shpenzimet perkatese");
                return;
            }
            const tabelaBody = document.getElementById("tabelaShpenzimeve").getElementsByTagName("tbody")[0];

            function shtoRresht(lloji, shuma) {
                if (shuma > 0) {
                    const rresht = tabelaBody.insertRow();
                    rresht.insertCell(0).innerText = lloji;
                    rresht.insertCell(1).innerText = shuma.toFixed(2);
                }
            }
            
            shtoRresht("Qera", qera);
            shtoRresht("Ushqim", ushqim);
            shtoRresht("Transport", transport);
            shtoRresht("Të tjera", tjera);

            
            total += qera + ushqim + transport + tjera;
            document.getElementById("totali").innerText = total.toFixed(2);

            
            document.getElementById("form").reset();
        }
        
        function pastroTeGjitha() {
            const tabelaBody = document.getElementById("tabelaShpenzimeve").getElementsByTagName("tbody")[0];
            tabelaBody.innerHTML = "";
            total = 0;
            document.getElementById("totali").innerText = total.toFixed(2);
        }