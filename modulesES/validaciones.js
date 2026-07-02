//validaciones.js 
export const esEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
export const esPasswordFuerte = (password) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);
export const esMayorDeEdad = (fechaNacimiento) => {
    const hoy = new Date();
    const fechaNacimientoDate = new Date(fechaNacimiento);
    const edad = hoy.getFullYear() - fechaNacimientoDate.getFullYear();
    return edad >= 18;
};

//las exportaciones que usaria serian nombradas, ya que no hay una sola función principal que se quiera exportar por defecto
import { esEmail } from './validaciones.js';

