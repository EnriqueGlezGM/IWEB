//
//  ImageStore.swift
//  P4 Quiz Play 10
//
//  Created by Santiago Pavón Gómez on 11/11/2019.
//  Copyright © 2019 IWEB. All rights reserved.
//

import UIKit

class ImageStore {
    
   // Cache para las imagenes.
   // La clave es un String con la url.
   private static var imagesCache = [URL:UIImage]()
   
    // Si la imagen pedida esta en la cache, entonces la devuelve.
    // Si la imagen no esta en la cache entonces la descarga y llama a downloadHandler.
    static func image(url: URL?, downloadHandler: @escaping (UIImage) -> ()) -> UIImage? {
        
        guard let url = url else {
            return nil
        }
        
        if let img = imagesCache[url] {
            return img
        }
        
        DispatchQueue.global().async {
            if let data = try? Data(contentsOf: url),
                let img = UIImage(data: data) {
                DispatchQueue.main.async {
                    self.imagesCache[url] = img
                    downloadHandler(img)
                }
            }
        }
        return nil
    }
}
