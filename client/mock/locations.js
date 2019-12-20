const locations = [
  {
    id: 1,
    type: "platform",
    name: "Perdido",
    description:
      "Perdido achieved first commercial production in 2010 from a new geological frontier in the US Gulf of Mexico, the Lower Tertiary/Paleogene. The project applied innovation to tackle challenges such as extreme water depth, rugged sea-floor terrain, and low-temperature and low-pressure reservoirs.",
    installDate: "2009/11/12",
    depth: 8000,
    status: "Active",
    image:
      "https://mma.prnewswire.com/media/768574/Shell_Perdido.jpg?p=publish",
    latlng: {
      latitude: 26.66,
      longitude: -93.335
    }
  },
  {
    id: 2,
    type: "rig",
    name: "Abbott Oil Field",
    description:
      "TAbbott Oil Field is a Oilfield in Milam County, Texas. It has an elevation of 162 meters, or 531 feet.",
    installDate: "N/A",
    depth: "NA",
    status: "Active",
    image:
      "https://previews.123rf.com/images/goce/goce1504/goce150400068/38957508-pump-jack-and-land-oil-drilling-rig-on-oilfield.jpg",
    latlng: {
      latitude: 30.4938155,
      longitude: -97.2263813
    }
  },
  {
    id: 3,
    type: "rig",
    name: "Akin Dimock Oil Field, TX ",
    description:
      "Akin Dimock Oil Field is a Oilfield in Archer County, Texas. It has an elevation of 293 meters, or 961 feet.",
    installDate: "N/A",
    depth: "NA",
    status: "Active",
    image:
      "https://previews.123rf.com/images/goce/goce1504/goce150400068/38957508-pump-jack-and-land-oil-drilling-rig-on-oilfield.jpg",
    latlng: {
      latitude: 33.6367702,
      longitude: -98.5214433
    }
  },
  {
    id: 4,
    type: "rig",
    name: "Alvord Oil Field, TX",
    description:
      "Akin Dimock Oil Field is a Oilfield in Archer County, Texas. It has an elevation of 293 meters, or 961 feet.",
    installDate: "N/A",
    depth: "NA",
    status: "Active",
    image:
      "https://previews.123rf.com/images/goce/goce1504/goce150400068/38957508-pump-jack-and-land-oil-drilling-rig-on-oilfield.jpg",
    latlng: {
      latitude: 33.3595559,
      longitude: -97.7819785
    }
  },
  {
    id: 5,
    type: "rig",
    name: "Anahuac Oil Field, TX",
    description:
      "Anahuac Oil Field is a Oilfield in Chambers County, Texas. It has an elevation of 7 meters, or 23 feet",
    installDate: "N/A",
    depth: "NA",
    status: "Active",
    image:
      "https://previews.123rf.com/images/goce/goce1504/goce150400068/38957508-pump-jack-and-land-oil-drilling-rig-on-oilfield.jpg",
    latlng: {
      latitude: 29.7816111,
      longitude: -94.5610262
    }
  },
  {
    id: 6,
    type: "rig",
    name: "Arcola Oil Field, TX",
    description:
      "Anahuac Oil Field is a Oilfield in Chambers County, Texas. It has an elevation of 7 meters, or 23 feet",
    installDate: "N/A",
    depth: "NA",
    status: "Active",
    image:
      "https://previews.123rf.com/images/goce/goce1504/goce150400068/38957508-pump-jack-and-land-oil-drilling-rig-on-oilfield.jpg",
    latlng: {
      latitude: 29.4732927,
      longitude: -95.4391079
    }
  },
  {
    id: 7,
    type: "rig",
    name: "Arneckeville Gas Field, TX",
    description:
      "Arneckeville Gas Field is a Oilfield in DeWitt County, Texas. It has an elevation of 77 meters, or 253 feet",
    installDate: "N/A",
    depth: "NA",
    status: "Active",
    image:
      "https://previews.123rf.com/images/goce/goce1504/goce150400068/38957508-pump-jack-and-land-oil-drilling-rig-on-oilfield.jpg",
    latlng: {
      latitude: 28.9685929,
      longitude: -97.2591573
    }
  },
  {
    id: 8,
    type: "rig",
    name: "Barry Oil Field",
    description:
      "Barry Oil Field is a Oilfield in DeWitt County, Texas. It has an elevation of 61 meters, or 200 feet",
    installDate: "N/A",
    depth: "NA",
    status: "Active",
    image:
      "https://previews.123rf.com/images/goce/goce1504/goce150400068/38957508-pump-jack-and-land-oil-drilling-rig-on-oilfield.jpg",
    latlng: {
      latitude: 29.1083101,
      longitude: -97.0452637
    }
  },
  {
    id: 9,
    type: "rig",
    name: "Batson Oil Field",
    description:
      "Batson Oil Field is a Oilfield in Hardin County, Texas. It has an elevation of 27 meters, or 89 feet",
    installDate: "N/A",
    depth: "NA",
    status: "Active",
    image:
      "https://previews.123rf.com/images/goce/goce1504/goce150400068/38957508-pump-jack-and-land-oil-drilling-rig-on-oilfield.jpg",
    latlng: {
      latitude: 30.2577099,
      longitude: -94.618531
    }
  },
  {
    id: 10,
    type: "rig",
    name: "Bayview Oil Field",
    description:
      "Batson Oil Field is a Oilfield in Hardin County, Texas. It has an elevation of 27 meters, or 89 feet",
    installDate: "N/A",
    depth: "NA",
    status: "Active",
    image:
      "https://previews.123rf.com/images/goce/goce1504/goce150400068/38957508-pump-jack-and-land-oil-drilling-rig-on-oilfield.jpg",
    latlng: {
      latitude: 31.2134782,
      longitude: -102.4220873
    }
  },
  {
    id: 11,
    type: "platform",
    name: "D(Cyrus)--Chevron",
    description: "Platform owned by Chevron",
    installDate: "2002/05/11",
    depth: 440,
    status: "Active",
    image:
      "https://www.bhp.com/-/media/images/2018/181019_gulfofmexico001.jpg?mh=844&h=844&w=1500&la=en&hash=11E34856AAEF77DD5A2D74111BC26F15E0D56B14https://previews.123rf.com/images/goce/goce1504/goce150400068/38957508-pump-jack-and-land-oil-drilling-rig-on-oilfield.jpg",
    latlng: {
      latitude: 27.91022528,
      longitude: -94.39643889
    }
  },
  {
    id: 12,
    type: "platform",
    name: "A-Boomvang Spar",
    description: "Platform owned by Anadarko Petroleum Corporation",
    installDate: "2002/05/11",
    depth: 7000,
    status: "Active",
    image: "https://live.staticflickr.com/3232/2751477487_8c953a942b_z.jpg",
    latlng: {
      latitude: 27.35356527,
      longitude: -94.62531327
    }
  },
  {
    id: 13,
    type: "platform",
    name: "A-Constitution",
    description: "Platform owned by Anadarko Petroleum Corporation",
    installDate: "2002/05/11",
    depth: 4970,
    status: "Active",
    image: "https://live.staticflickr.com/3232/2751477487_8c953a942b_z.jpg",
    latlng: {
      latitude: 27.29220815,
      longitude: -90.96802088
    }
  },
  {
    id: 14,
    type: "platform",
    name: "A(NANSEN SPAR)",
    description: "Platform owned by Anadarko Petroleum Corporation",
    installDate: "2002/05/11",
    depth: 3675,
    status: "Active",
    image: "http://ocsbbs.com/Images/ImageGallery/Boomvang_Nansen%20spar.jpg",
    latlng: {
      latitude: 27.3671371,
      longitude: -94.46765355
    }
  },
  {
    id: 15,
    type: "platform",
    name: "A-Hoover Spar",
    description: "Platform owned by Exxon",
    installDate: "2000/03/12",
    depth: 4800,
    status: "Active",
    image:
      "https://i.pinimg.com/originals/89/53/33/895333e85cf7201e47991b50c2efb264.jpg",
    latlng: {
      latitude: 26.93905139,
      longitude: -94.68872137
    }
  },
  {
    id: 16,
    type: "platform",
    name: "A(HOLSTEIN SPAR",
    description: "gas production: 4,042,051 MCF, oil production: 4,652,628 bbl",
    installDate: "2000/03/12",
    depth: 4500,
    status: "Active",
    image:
      "https://i.pinimg.com/originals/89/53/33/895333e85cf7201e47991b50c2efb264.jpg",
    latlng: {
      latitude: 26.93905139,
      longitude: -94.68872137
    }
  },
  {
    id: 17,
    type: "platform",
    name: "Hermosa",
    description: "gas production: 514,758 MCF, oil production: 4,652,628 bbl",
    installDate: "2000/03/12",
    depth: 603,
    status: "Active",
    image:
      "https://i.pinimg.com/originals/89/53/33/895333e85cf7201e47991b50c2efb264.jpg",
    latlng: {
      latitude: 26.93905139,
      longitude: -94.68872137
    }
  },
  {
    id: 18,
    type: "platform",
    name: "Hildago",
    description: "gas production: 514,758 MCF, oil production: 4,652,628 bbl",
    installDate: "2000/03/12",
    depth: 603,
    status: "Active",
    image:
      "https://i.pinimg.com/originals/89/53/33/895333e85cf7201e47991b50c2efb264.jpg",
    latlng: {
      latitude: 34.49500008,
      longitude: -120.7032945
    }
  }
];

export { locations };
