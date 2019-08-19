/*
 * Aplicaciones de Productos
 * - Servicio: Listar métodos de aspersión
 * - Método: POST
 * - URL: https://<host>:<port>/remote/common/metodos
 */

var listarMetodos = {
	"errorCode": 0,
	"message": null,
	"metodos": [
		{
			"idMetodo": 1,
			"nombre": "Aspersión",
			"idMetodoPadre": null
		},
		{
			"idMetodo": 2,
			"nombre": "Aspersión con maquinarias",
			"idMetodoPadre": 1,
			"agregarVolMezcla": true,
			"agregarCultivo": true,
			"limitarDetalles": false,
			"agregarMaquinaria": true,
			"agregarSupervisor": false,
			"agregarMochilas": false,
			"agregarSpray": false,
			"valvulaVolPorProd": false
		},
		{
			"idMetodo": 3,
			"nombre": "Aspersión con mochila",
			"idMetodoPadre": 1,
			"agregarVolMezcla": true,
			"agregarCultivo": true,
			"limitarDetalles": false,
			"agregarMaquinaria": false,
			"agregarSupervisor": true,
			"agregarMochilas": true,
			"agregarSpray": false,
			"valvulaVolPorProd": false
		},
		{
			"idMetodo": 4,
			"nombre": "Inyección",
			"idMetodoPadre": null
		},
		{
			"idMetodo": 5,
			"nombre": "Inyección con riego",
			"idMetodoPadre": 4,
			"agregarVolMezcla": false,
			"agregarCultivo": true,
			"limitarDetalles": true,
			"agregarMaquinaria": false,
			"agregarSupervisor": false,
			"agregarMochilas": false,
			"agregarSpray": false,
			"valvulaVolPorProd": false
		},
		{
			"idMetodo": 6,
			"nombre": "Pastas/Cebos",
			"idMetodoPadre": null
		},
		{
			"idMetodo": 7,
			"nombre": "Pastas/Cebos con spray",
			"idMetodoPadre": 6,
			"agregarVolMezcla": false,
			"agregarCultivo": true,
			"limitarDetalles": false,
			"agregarMaquinaria": false,
			"agregarSupervisor": false,
			"agregarMochilas": false,
			"agregarSpray": true,
			"valvulaVolPorProd": false
		},
		{
			"idMetodo": 8,
			"nombre": "Pastas/Cebos sin elemento",
			"idMetodoPadre": 6,
			"agregarVolMezcla": false,
			"agregarCultivo": false,
			"limitarDetalles": false,
			"agregarMaquinaria": false,
			"agregarSupervisor": true,
			"agregarMochilas": false,
			"agregarSpray": false,
			"valvulaVolPorProd": true
		},
		{
			"idMetodo": 9,
			"nombre": "Drench",
			"idMetodoPadre": null
		},
		{
			"idMetodo": 10,
			"nombre": "Drench con mochila",
			"idMetodoPadre": 9,
			"agregarVolMezcla": true,
			"agregarCultivo": true,
			"limitarDetalles": false,
			"agregarMaquinaria": false,
			"agregarSupervisor": true,
			"agregarMochilas": true,
			"agregarSpray": false,
			"valvulaVolPorProd": false
		},
		{
			"idMetodo": 11,
			"nombre": "Drench sin elemento",
			"idMetodoPadre": 9,
			"agregarVolMezcla": true,
			"agregarCultivo": true,
			"limitarDetalles": false,
			"agregarMaquinaria": false,
			"agregarSupervisor": true,
			"agregarMochilas": false,
			"agregarSpray": false,
			"valvulaVolPorProd": false
		}
	]
}
