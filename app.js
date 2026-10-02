'use strict';

//PARÁMETROS 
const parametros = new URLSearchParams(window.location.search);

const usuario = parametros.get("usuario") ?? "Invitado";
const rol = parametros.get("rol") ?? "Básica";

console.log("Usuario:", usuario);
console.log("Rol:", rol);


// BLOQUE 1********************************
//COMPROBAR IDIOMA
const idioma = navigator.language;
console.log("Idioma:", idioma);
const idiomaFormateado = new Intl.DisplayNames(["es-ES"], {
    type: "language"
}).of(idioma.split("-")[0]);

//COMPROBAR CONEXION
const conectado = navigator.onLine;
console.log("Conexión a Internet:", conectado);

//API CRIPTOGRÁFICA
const idSesion = crypto.randomUUID();
console.log("ID de sesión:", idSesion);

//CONOCER LA FECHA Y HORA
const ahora = new Date();
console.log("Fecha actual:", ahora);

//FORMATEAR LA FECHA
const fechaFormateada = new Intl.DateTimeFormat("es-ES", {
    dateStyle: "long"
}).format(ahora);
console.log("Fecha:", fechaFormateada);


//OBTENER LOS DATOS DEL USUARIO CON EL DOM
const elementoUsuario = document.getElementById("usuario");
const elementoRol = document.getElementById("rol");
const elementoIdioma = document.getElementById("idioma");
const elementoConexion = document.getElementById("conexion");
const elementoIdSesion = document.getElementById("id-sesion");
const elementoFecha = document.getElementById("fecha");
elementoUsuario.textContent = usuario;
elementoRol.textContent = rol;
elementoIdioma.textContent = idiomaFormateado;
elementoConexion.textContent = conectado ? "Conectado" : "Sin conexión";
elementoIdSesion.textContent = idSesion;
elementoFecha.textContent = fechaFormateada;

//SEPARACIÓN DE CORREO
//CORREO DE EJEMPLO
const emailSocio = "  Lucia.Cine@Ejemplo.COM  ";

const emailLimpio = emailSocio.trim();
console.log("Email limpio:", emailLimpio);

const emailNormalizado = emailLimpio.toLowerCase();
console.log("Email normalizado:", emailNormalizado);

const partesEmail = emailNormalizado.split("@");
console.log("Correo separado:", partesEmail);

const [nombreEmail, dominioEmail] = emailNormalizado.split("@");
console.log("Usuario del email:", nombreEmail);
console.log("Dominio:", dominioEmail);

//CONVERTIR A TEXTO EL NÚMERO
const codigo = 42
const codigoTexto = String(codigo);
const codigoFormateado = codigoTexto.padStart(6, "0");

console.log("Código formateado:", codigoFormateado);

//ASIGNACIÓN DE PREFERENCIAS
const suscripcion = null;
const nickname = "Cinefilo123";
const perfil = nickname || "Espectador VIP";
const tipoSuscripcion = suscripcion ?? "Básica";
console.log("Perfil:", perfil);
console.log("Tipo de suscripción:", tipoSuscripcion);

//ASIGNACIÓN DE ENTRADAS
const saldo = 0;
const entradasRegalo = saldo ?? 2;
console.log("Entradas de regalo:", entradasRegalo);


//BLOQUE 2
//PROCESAMIENTO DE PRECIOS
const precioEntradaTexto = "8.50€";
const precioComboTexto = "12.00€";

//CONVERTIR PRECIO A NUMÉRICO
const precioEntrada = Number(precioEntradaTexto.replace("€", ""));
const precioCombo = Number(precioComboTexto.replace("€", ""));

//COMROBAR SI LOS PRECIOS SON VÁLIDOS
if (!Number.isFinite(precioEntrada) || !Number.isFinite(precioCombo)) {
    console.error("Los precios no son válidos.");
}

console.log("Precio:", precioEntrada);
console.log("Precio combo:", precioCombo);

//VALIDAR SUBTOTAL
const subtotal = precioEntrada + precioCombo;

console.log("Subtotal válido:", subtotal);

//DESCUENTO PROMOCIONAL
const descuentoTexto = "3";
const descuento = Number(descuentoTexto);
if (!Number.isFinite(descuento)) {
    console.error("El descuento no es válido.");
}

//CALCULAR IMPORTE CON DESCUENTO   
const importeConDescuento = subtotal - descuento;
console.log("Descuento:", descuento);
console.log("Importe con descuento:", importeConDescuento);

//CALCULAR IVA
const iva = importeConDescuento * 0.21;
console.log("IVA:", iva);

//IMPORTE CON DESCUENTO + IVA
const total = importeConDescuento + iva;
console.log("Total:", total);

//FORMATEAR DECIMALES
const formatoEuro = new Intl.NumberFormat("es-ES", {
    style: "currency",
    currency: "EUR"
});

console.log("Total formateado:", formatoEuro.format(total));

//BUSCAR LOS ELEMENTOS DEL DOM                    
const elementoSubtotal = document.getElementById("subtotal");
const elementoDescuento = document.getElementById("descuento");
const elementoIva = document.getElementById("iva");
const elementoTotal = document.getElementById("total");

//CAMBIAR EL TEXTO DEL DOM
elementoSubtotal.textContent = formatoEuro.format(subtotal);
elementoDescuento.textContent = formatoEuro.format(descuento);
elementoIva.textContent = formatoEuro.format(iva);
elementoTotal.textContent = formatoEuro.format(total);

console.log("Subtotal:", subtotal);
console.log("Descuento:", descuento);
console.log("IVA:", iva);
console.log("Total:", total);

//INCREMENTAR EL NÚMERO DE RESERVA
let numeroReserva = 100;

const elementoNumeroReserva = document.getElementById("numero-reserva");
const botonReserva = document.getElementById("incrementar-reserva");

botonReserva.addEventListener("click", () => {
    const nuevaReserva = ++numeroReserva;
    elementoNumeroReserva.textContent = nuevaReserva;
});


//BLOQUE 3
//CUENTA ATRÁS
const botonDescuento = document.getElementById("activar-descuento");
const cuentaAtras = document.getElementById("cuenta-atras");

//VARIABLE PARA CONTROLAR EL TEMPORIZADOR
let temporizador = null;

//BOTÓN - SEVENTO DESCUENTO
botonDescuento.addEventListener("click", () => {

    //COMPROBAR SI YA HAY UN TEMPORIZADOR ACTIVO
    if (temporizador !== null) {
        return;
    }

    console.log("Descuento activado");

    let segundos = 20;
    cuentaAtras.textContent = segundos;

    console.log("Segundos:", segundos);

    //TEMPORIZADOR
    temporizador = setInterval(() => {
        segundos--;
        cuentaAtras.textContent = segundos;

        console.log("Segundos restantes:", segundos);
        if (segundos === 0) {
            clearInterval(temporizador);
            temporizador = null;
            alert("La promoción ha expirado");
        }
    }, 1000);
});


//BLOQUE 4
//PUBLICACIÓN DE CRÍTICAS
const campoOpinion = document.getElementById("opinion");
const botonCritica = document.getElementById("enviar-critica");
const listaCriticas = document.getElementById("lista-criticas");

//CREAR UN ARRAY DE RESEÑAS
let reseñas = [];

//AÑADIR CLAVE PARA USAR LOCALSTORAGE
const CLAVE_RESEÑAS = "cineverseResenas";

try {
    const reseñasGuardadas = localStorage.getItem(CLAVE_RESEÑAS);

    if (reseñasGuardadas) {
        reseñas = JSON.parse(reseñasGuardadas);
    }
} catch (error) {
    console.error("No se pudieron recuperar las reseñas:", error);
    reseñas = [];
}

//FUNCIÓN PARA MOSTRAR LAS RESEÑAS
function mostrarReseñas() {
    listaCriticas.textContent = "";

    reseñas.forEach((reseña) => {
        const elementoReseña = document.createElement("article");

        const textoOpinion = document.createElement("p");
        textoOpinion.textContent = reseña.opinion;

        elementoReseña.appendChild(textoOpinion);
        listaCriticas.appendChild(elementoReseña);
    });
}

//LLAMAR A LA FUNCIÓN
mostrarReseñas();

//BOTÓN PARA PUBLICAR CRÍTICA
botonCritica.addEventListener("click", () => {

    const opinion = campoOpinion.value;

    console.log("Opinión:", opinion);

    //RESEÑA
    const reseña = {
        fecha: new Date(),
        socio: usuario,
        horaLocal: new Date().toLocaleTimeString("es-ES"),
        opinion: opinion
    };
    reseñas.push(reseña);

    //GUARDAR RESEÑAS EN LOCALSTORAGE
    localStorage.setItem(CLAVE_RESEÑAS, JSON.stringify(reseñas));

    mostrarReseñas();

    console.log("Reseñas:", reseñas);
});
