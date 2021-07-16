//
//  ControlPanerlHorizontalderecha.swift
//  PokeTris
//
//  Created by Enrique Gonzalez on 14/10/2020.
//

import SwiftUI

struct ControlPanerlHorizontalderecha: View {
	@EnvironmentObject var board: Board
	
	var body: some View {
		VStack {
			Image("rotate_left")
				.resizable()
				.scaledToFit()
				.onTapGesture(count: /*@START_MENU_TOKEN@*/1/*@END_MENU_TOKEN@*/) {
					board.rotate(toRight: false)
				}
			Image("rotate_right")
				.resizable()
				.scaledToFit()
				.onTapGesture(count: /*@START_MENU_TOKEN@*/1/*@END_MENU_TOKEN@*/) {
					board.rotate(toRight: true)
				}

			
		}
	}
}

struct ControlPanerlHorizontalderecha_Previews: PreviewProvider {
	static var previews: some View {
		ControlPanerlHorizontalderecha()
	}
}
