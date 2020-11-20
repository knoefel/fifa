export const functionalAreas = [
  {
    id: 1,
    refNumber: 12,
    name: "FA Service Provider",
    typeId: 1,
    parentEventIds: [1, 6],
  },
  {
    id: 2,
    refNumber: 14,
    name: "Functional Area Owner Test",
    typeId: 2,
    parentEventIds: [3, 6],
  },
  {
    id: 3,
    refNumber: 2.1,
    name: "Media",
    typeId: 1,
    parentEventIds: [2, 7],
  },
  {
    id: 4,
    refNumber: 2.11,
    name: "New Functional Area",
    typeId: 3,
    parentEventIds: [1, 5],
  },
  {
    id: 5,
    refNumber: 3.11,
    name: "Stadium Management",
    typeId: 3,
    parentEventIds: [4, 6],
  },
  {
    id: 6,
    refNumber: 2.1,
    name: "Test Functional Area",
    typeId: 2,
    parentEventIds: [5, 6],
  },
];

export const functionalAreaTypes = [
  { id: 1, name: "Event Service Provider" },
  { id: 2, name: "Client Group Operations" },
  { id: 3, name: "Client Group Relations" },
];

export const functionalAreaParentEvents = [
  {
    header: "Group 1",
    divider: true,
  },
  {
    text: "Event 1 (Group 1)",
    value: 1,
  },
  {
    text: "Event 2 (Group 1)",
    value: 2,
  },
  {
    text: "Event 3 (Group 1)",
    value: 3,
  },
  {
    text: "Event 4 (Group 1)",
    value: 4,
  },
  {
    header: "Group 2",
  },
  {
    text: "Event 1 (Group 2)",
    value: 5,
  },
  {
    text: "Event 2 (Group 2)",
    value: 6,
  },
  {
    text: "Event 3 (Group 2)",
    value: 7,
  },
  {
    text: "Event 4 (Group 2)",
    value: 8,
  },
];
