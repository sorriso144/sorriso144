window.onload = function()
{
    var oHidden = document.getElementById("secrete-area");
    var oBtn = document.getElementById("secrete");
    i = 1;
    oBtn.addEventListener("click", function(e) {
        e.preventDefault();
        i = i + 1; 
        console.log(i)

        if (i === 6) {
            oHidden.toggleAttribute("hidden") 
            i = 1;   
        }
    });
    
    var time = document.querySelector("#timer");
    var now = new Date();
    time.value = now
    console.log(now);

    const btn = document.querySelector('#salvar-salvar');
    var va = document.querySelector("#valor");
    var oname = document.querySelector("#name");
    var ocpf = document.querySelector("#qwecpf");
    var oinst = document.querySelector("#insti");
    var oagencia = document.querySelector("#agencia");
    var oconta = document.querySelector("#conta");
    var cname = document.querySelector("#compname");
    var ccpf = document.querySelector("#compcpf");
    var cinst = document.querySelector("#compinst");
    var cagencia = document.querySelector("#compagencia");
    var cconta = document.querySelector("#compconta");
    var cvalor = document.querySelector("#ccvalor");

    btn.addEventListener("click", function(e) {
        e.preventDefault();
        var x = document.querySelector("#objvalor");
        var y = x.value;
        var xx = document.querySelector("#cpf-cpf");
        var yy = xx.value;
        var xxx = document.querySelector("#name-name");
        var yyy = xxx.value;
        var xxxx = document.querySelector("#instituicao");
        var yyyy = xxxx.value;
        var xxxxx = document.querySelector("#agen");
        var yyyyy = xxxxx.value;
        var xxxxxx = document.querySelector("#cont");
        var yyyyyy = xxxxxx.value;

        pix = {
            valor:y,
            cpf:yy,
            dname:yyy,
            inst:yyyy,
            agenc:yyyyy,
            con:yyyyyy
        }
        
        localStorage.pix = pix;

        oname.value = pix.dname;
        ocpf.value = pix.cpf;
        va.value = pix.valor;
        oinst.value = pix.inst;
        oagencia.value = pix.agenc;
        oconta.value = pix.con;

        cname.value = pix.dname;
        ccpf.value = pix.cpf;
        cinst.value = pix.inst;
        cagencia.value = pix.agenc;
        cconta.value = pix.con;
        cvalor.value = pix.valor;


    });
}