document.addEventListener('DOMContentLoaded', function () {
  const botonInscripcion = document.getElementById('btnInscripcion');
  const formulario = document.getElementById('registroForm');
  const mensaje = document.getElementById('mensajeFormulario');

  // Limpiar estados visuales de invalid cuando el usuario abre el formulario
  function clearInvalids() {
    const invalids = formulario.querySelectorAll('.invalid');
    invalids.forEach(el => {
      el.classList.remove('invalid');
      el.removeAttribute('aria-invalid');
    });
  }

  function validarCorreo(correo) {
    const patronCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return patronCorreo.test(correo);
  }

  botonInscripcion.addEventListener('click', function () {
    mensaje.textContent = '';
    mensaje.className = 'form-message';
    clearInvalids();
  });

  formulario.addEventListener('submit', function (event) {
    event.preventDefault();

    // Validar todos los campos que tienen el atributo required
    const requiredFields = Array.from(formulario.querySelectorAll('[required]'));
    let firstInvalid = null;
    let hasInvalid = false;

    requiredFields.forEach(field => {
      let valid = true;
      const tag = field.tagName.toLowerCase();
      const type = field.type;

      if (type === 'checkbox') {
        valid = field.checked;
      } else if (tag === 'select') {
        valid = field.value !== '';
      } else {
        valid = field.value.trim() !== '';
      }

      if (!valid) {
        field.classList.add('invalid');
        field.setAttribute('aria-invalid', 'true');
        if (!firstInvalid) firstInvalid = field;
        hasInvalid = true;
      } else {
        field.classList.remove('invalid');
        field.setAttribute('aria-invalid', 'false');
      }
    });

    if (hasInvalid) {
      mostrarMensaje('Por favor completa todos los campos obligatorios.', 'error');
      if (firstInvalid && typeof firstInvalid.focus === 'function') {
        firstInvalid.focus();
      }
      return;
    }

    // Validar formato de correo
    const correoEl = document.getElementById('correo');
    const correo = correoEl.value.trim();
    if (!validarCorreo(correo)) {
      correoEl.classList.add('invalid');
      correoEl.setAttribute('aria-invalid', 'true');
      mostrarMensaje('Debes escribir un correo electrónico válido.', 'error');
      if (typeof correoEl.focus === 'function') correoEl.focus();
      return;
    }

    // Validar que teléfono tenga solo dígitos
    const telefonoEl = document.getElementById('telefono');
    const telefono = telefonoEl.value.trim();
    const soloDigitos = /^\d+$/;
    if (!soloDigitos.test(telefono)) {
      telefonoEl.classList.add('invalid');
      telefonoEl.setAttribute('aria-invalid', 'true');
      mostrarMensaje('El número telefónico debe contener solo dígitos.', 'error');
      if (typeof telefonoEl.focus === 'function') telefonoEl.focus();
      return;
    }

    // Confirmar que términos está marcado (ya validado en required, pero aseguramos)
    const terminosEl = document.getElementById('terminos');
    if (!terminosEl.checked) {
      terminosEl.classList.add('invalid');
      terminosEl.setAttribute('aria-invalid', 'true');
      mostrarMensaje('Debes aceptar los términos y condiciones para continuar.', 'error');
      if (typeof terminosEl.focus === 'function') terminosEl.focus();
      return;
    }

    mostrarMensaje('Registro enviado correctamente. Pronto recibirás información del curso.', 'success');
    clearInvalids();
    formulario.reset();
  });

  function mostrarMensaje(texto, tipo) {
    mensaje.textContent = texto;
    mensaje.className = 'form-message ' + tipo;
    if (tipo === 'success') {
      // limpiar estados visuales al enviar con éxito
      clearInvalids();
    }
  }
});
