interface ConfirmationData {
  users: {
    name: string
  }[];
}

export const confirmation: ConfirmationData[] = [
  {
    users: [
      {name: 'Node'},
      {name: 'Twig'},
      {name: 'MJML'},
      {name: 'Angular'}
    ]
  },
  {
    users: [
      {name: 'A'},
      {name: 'B'},
      {name: 'C'}
    ]
  }
];
