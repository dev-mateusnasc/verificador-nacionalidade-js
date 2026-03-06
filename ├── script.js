<script>
    function Verificar(){
            var pais = document.getElementById('txtpais').value.toLowerCase()
            var resultado = document.getElementById('resultado')
            if (pais === 'brasil'){
                resultado.innerHTML = 'Você é brasileiro(a)!'}
                else {
                    resultado.innerHTML = 'Você é estrangeiro(a)!🌎'}
                }

    </script>
