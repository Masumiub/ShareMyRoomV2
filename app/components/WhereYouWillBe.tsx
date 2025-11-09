import React from 'react'
import Map from '../assets/MapProprty.png'
import Image from 'next/image'

export default function WhereYouWillBe() {
  return (
 <div className="mx-auto bg-white rounded-lg  overflow-hidden">
      {/* Header */}
      <div className="bg-white px-6 py-4 0">
        <h1 className="text-2xl font-semibold text-gray-900">Where you&apos;ll be</h1>
      </div>

      {/* Content */}
      <div className="flex flex-col md:flex-row">
        {/* Left side - Map placeholder */}

        <div className="w-full flex items-center justify-center p-4">
          {/* <div className="text-center text-gray-500">
            <div className="w-32 h-32 bg-gray-200 rounded-lg flex items-center justify-center mx-auto mb-2">
              <span className="text-sm">Map Image</span>
            </div>
            <p className="text-xs">Static map placeholder</p>
          </div> */}
          <Image src={Map} alt="Map"></Image>
        </div>

      </div>

      {/* Footer with location description */}
      <div className=" px-6 py-4 ">
        <div className="mb-2">
          <h3 className="font-semibold text-gray-900">Bordeaux, Nouvelle-Aquitaine, France</h3>
        </div>
        <p className="text-sm text-gray-600 leading-relaxed">
          Very dynamic and appreciated district by the people of Bordeaux thanks to rue St James and place Fernand Lafargue. Home to many historical monuments such as the Grosse Cloche, the Porte de Bourgogne and the Porte Calihau, and cultural sites such as the Aquitaine Museum.
        </p>
        <button className="mt-3 text-sm font-medium text-gray-900 hover:text-gray-700 transition-colors">
          Show more
        </button>
      </div>


    </div>
  )
}
