//
//  CheckAPIId.swift
//  El Vuelo del Grajo
//
//  Created by Santiago Pavón Gómez on 01/11/2020.
//

import SwiftUI

struct CheckAPIId: View {
    
    var body: some View {
        Text("""
            Atención:
            Para utilizar esta aplicación hay que registrarse en http://openweathermap.org y obtener una clave de acceso al API.
            Copiar el valor de la clave en la constante APPID del fichero CityWeatherModel.swift.
            """)
    }
}

struct CheckAPIId_Previews: PreviewProvider {
    static var previews: some View {
        CheckAPIId()
    }
}
