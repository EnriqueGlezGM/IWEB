//
//  Type.swift
//  Pokedex
//
//  Created by Santiago Pavón on 26/11/14.
//  Copyright (c) 2014 UPM. All rights reserved.
//

import Foundation

/// Estructura para representar un tipo de pokemon.
struct Type {
    
    // Nombre del tipo (agua, fuego, electrico, ...)
    let name: String
    
    // Nombre del icono (sin la extension .png)
    let icon: String
    
    // Todas las razas de este tipo.
    let races: [Race]
}
