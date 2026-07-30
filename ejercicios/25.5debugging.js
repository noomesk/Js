_parserError(evt, service, params = null) {
  // REAKPOINT1
  // aki revisa qué llegó en:
  // evt, service, params

  const responseError = JSON.parse(evt.response);

  //BREAKPOINT #2
  // Este vrifica q responseError se haya creado correctamente
  // y que JSON.parse() no haya fallado.

  let error = {
    dmInfo: service,
    status: responseError['http-status'] || 'undefined',
    statusText: responseError['system-error-description'] || 'Error code undefined',
    errorMessage: responseError['error-message'] || 'Error message undefined'
  };

  // BREAKPOINT #3
  // Este se supone q inspecciona el objeto error.
  // Habria q preguntarse: ¿Tiene status, statusText y errorMessage con los valores esperados?

  if (params) {

    //BREAKPOINT #4
    // Comprueba si realmente entró al if
    // y qué contiene params.

    error = {
      ...error,
      params
    };

    // BREAKPOINT #5
    // Este verifica que params se agregó correctamente al objeto error.
  }

  console.error(`Error in service ${service}:`, error);

  // BREAKPOINT #6
  // Revisa el objeto error justo antes del switch.
  // Especialmente error.status.

  switch (error.status) {

    case 204:
      // BREAKPOINT #7
      // Confirmar que entra al caso 204.
      this._emit('error-content', error);
      break;

    case 400:
      // BREAKPOINT #8
      // Confirmar que entra al caso 400.
      this._emit('error-bad-request', error);
      break;

    case 403:
      // REAKPOINT #9
      // Confirmar que entra al caso 403.
      this._emit('error-tsec', error);
      break;

    case 409:
      // BREAKPOINT #10
      // Confirmar que entra al caso 409.
      this._emit('error-functional', error);
      break;

    case 401:
      // BREAKPOINT #11
      // Confirmar que entra al caso 401.
      this._emit('error-unauthorized', error);
      break;

    case 500:
      // BREAKPOINT #12
      // Confirmar que entra al caso 500.
      this._emit('error-technical', error);
      break;

    default:
      // BREAKPOINT #13
      // Si llega aaki, significa que el status
      // no coincide con ninguno de los anteriores.
      this._emit('error-default', error);
  }
}