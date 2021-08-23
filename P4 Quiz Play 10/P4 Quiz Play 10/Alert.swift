//
//  Alert.swift
//  P4 Quiz Play 10
//
//  Created by Santiago Pavón Gómez on 04/11/2019.
//  Copyright © 2019 IWEB. All rights reserved.
//

import UIKit

extension UIViewController {
    
    func alert(msg: String, completionHandler: (() -> ())? = nil) {
        
        print("Alerta: \(msg)")
        
        let avc = UIAlertController(title: "Resultado", message: msg, preferredStyle: .alert)
        
        avc.addAction(UIAlertAction(title: "OK",
                                    style: .default) { (action) in
                                        completionHandler?()
        })
        
        present(avc, animated: true)
    }
}


