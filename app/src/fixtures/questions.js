// 'type': 'schools',
// 'title': 'NYU',
// 'size': 22615,
// 'setting': 'urban',
// 'gpa_cutoff': 3.0,
// 'region': 'mid-atlantic',
// 'tuition_cost': 42472

export default {
  get() {
    return [
      {
        "id": 0,
        "preference": "size",
        "text": "what size school would you prefer",
        "options": [
          {
            "id": 0,
            "text": "whatevs",
          },
          {
            "id": 1,
            "text": "big",
          },
          {
            "id": 2,
            "text": "small",
          }
        ]
      },
      {
        "id": 1,
        "preference": "setting",
        "text": "in which setting are you looking to study"
      },
      {
        "id": 2,
        "preference": "gpa_cutoff",
        "text": "what's your GPA"
      },
      {
        "id": 3,
        "preference": "region",
        "text": "in which region are you looking to study"
      },
      {
        "id": 4,
        "preference": "tuition_cost",
        "text": "about how much are you hoping to pay for tuition"
      },
      {
        "id": 5,
        "preference": "greek life",
        "text": "How important is greek life",
        "options": [
          {
            "id": 0,
            "text": "whatevs",
          },
          {
            "id": 1,
            "text": "No. Fucking. Way.",
          },
          {
            "id": 2,
            "text": "I'm cool with it",
          },
          {
            "id": 3,
            "text": "Greek life, all the way. OBVI!",
          }
        ]
      },
      {
        "id": 6,
        "preference": "social life",
        "text": "how important is having a social life",
        "options": [
          {
            "id": 0,
            "text": "whatevs",
          },
          {
            "id": 1,
            "text": "Nope. I'm here to study",
          },
          {
            "id": 2,
            "text": "Board games & my fam; that's all I need",
          },
          {
            "id": 3,
            "text": "When the uppers get too strong, I switch to downers",
          }
        ]
      }
    ]
  }
}
