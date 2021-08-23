//
//  Text2.swift
//  El Vuelo del Grajo
//
//  Created by Santiago Pavón Gómez on 01/11/2020.
//

import SwiftUI

struct Text2: View {
    
    var l: String
    var icon: String
    var r: String
    
    var body: some View {
        HStack {
            Label(l, systemImage: icon)
            Spacer()
            Text(r)
        }
    }
}

struct Text2_Previews: PreviewProvider {
    static var previews: some View {
        Text2(l: "aa", icon: "zzz", r: "bb")
    }
}
