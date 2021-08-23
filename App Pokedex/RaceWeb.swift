//
//  RaceData.swift
//  Pokedex
//
//  Created by Santiago Pavón Gómez on 25/11/2019.
//  Copyright © 2019 IWEB. All rights reserved.
//

import SwiftUI
import WebKit

struct RaceWeb: UIViewRepresentable {

    let race: Race

    func makeUIView(context: UIViewRepresentableContext<RaceWeb>) -> WKWebView {
        WKWebView()
    }
    
    func updateUIView(_ webView: WKWebView, context: UIViewRepresentableContext<RaceWeb>) {
        
        var urlStr = "http://es.pokemon.wikia.com"
        
        if let path = "/wiki/\(race.name)".addingPercentEncoding(withAllowedCharacters: .urlPathAllowed) {
            
            urlStr = "\(urlStr)\(path)"
        }
        
        if let url = URL(string: urlStr) {
            
            print(urlStr)
            let req = URLRequest(url: url)
            webView.load(req)
        }
    }
}


struct RaceWeb_Previews: PreviewProvider {
    static var previews: some View {
        RaceWeb(race: Race(code: 613, name: "Cubchoo", icon: "613"))
    }
}
