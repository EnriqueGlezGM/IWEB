//
//  RaceDetail.swift
//  Pokedex
//
//  Created by Santiago Pavón Gómez on 09/11/2019.
//  Copyright © 2019 IWEB. All rights reserved.
//

import SwiftUI

struct RaceDetail: View {
    
    let race: Race

    var body: some View {
        ZStack(alignment: .bottom) {
            Image("\(race.icon)")
                .resizable()
                .scaledToFit()
                .blur(radius: 5.5)
                .saturation(0.2)
                .opacity(0.3)
            Text(race.name)
                .font(.headline)
                .padding()
        }
        .navigationBarTitle(Text(race.name), displayMode: .inline)
    }
}

struct RaceDetail_Previews: PreviewProvider {
    static var previews: some View {
        NavigationView {
            RaceDetail(race: Race(code: 613, name: "Cubchoo", icon: "613"))
        }
    }
}
