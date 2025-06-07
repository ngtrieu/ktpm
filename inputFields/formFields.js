export const formFieldsStep1 = [
  { name: "name", label: "Title", placeholder: "Enter video title" },
  {
    name: "description",
    label: "Description",
    placeholder: "Enter video description",
    type: "textarea",
  },
  {
    name: "category",
    label: "Category",
    placeholder: "Select category",
    type: "select",
    options: [
      "Music",
      "Movie",
      "Live",
      "Gaming",
      "News",
      "Sports",
      "Learning",
      "Fashion & Beauty",
    ],
  },
  { name: "link", label: "Video link", placeholder: "Enter video link" },
  {
    name: "thumbnail",
    label: "Thumbnail",
    placeholder: "Enter thumbnail URL",
  },
];

export const formFieldsStep2 = [
  {
    name: "channel",
    label: "Channel Name",
    placeholder: "Enter channel name",
  },
  { name: "logo", label: "Logo", placeholder: "Enter logo URL" },
  {
    name: "subscribers",
    label: "Subscribers",
    placeholder: "Enter number of subscribers",
  },
  {
    name: "duration",
    label: "Duration",
    placeholder: "Enter video duration",
  },
  {
    name: "uploadTime",
    label: "Upload Time",
    placeholder: "Enter upload time",
  },
  { name: "views", label: "Views", placeholder: "Enter number of views" },
];