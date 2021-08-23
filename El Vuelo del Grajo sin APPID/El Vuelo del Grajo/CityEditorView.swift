//
//  CityEditor.swift
//  El Vuelo del Grajo
//
//  Created by Santiago Pavón Gómez on 02/11/2020.
//

import SwiftUI

struct CityEditorView: View {
    
    @State var cityName: String = ""
    
    @EnvironmentObject var citiesModel : CitiesModel
    
    @Environment(\.presentationMode) var presentationMode
    
    var body: some View {
        VStack {
            Text("Altas")
                .font(.largeTitle)
            Spacer()
            Divider()
            Text("Nombre de la ciudad:")
                .font(.title)
            TextField("Nombre", text: $cityName)
                .textFieldStyle(RoundedBorderTextFieldStyle())
                .padding(.bottom, 50)
            HStack {
                Spacer()
                Button(action: {
                    citiesModel.add(cityName: cityName)
                    presentationMode.wrappedValue.dismiss()
                }, label: {
                    Text("Guardar")
                })
                .padding()
                .overlay(RoundedRectangle(cornerRadius: 25)
                            .stroke()
                            .foregroundColor(.accentColor))
                Spacer()
                Button(action: {
                    presentationMode.wrappedValue.dismiss()
                }, label: {
                    Text("Cancelar")
                })
                .padding()
                .overlay(RoundedRectangle(cornerRadius: 25)
                            .stroke()
                            .foregroundColor(.accentColor))
                Spacer()
            }
            Divider()
            Spacer()
        }
        .padding()
        .background(Color("fondo"))
    }
}

struct CityEditor_Previews: PreviewProvider {
    static var previews: some View {
        CityEditorView(cityName: "")
    }
}
