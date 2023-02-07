# Project: Pokemon Website using Next.js, GraphQL API,TypeScript and Tailwind Css [Live Link](https://pokemon-app-lemon-three.vercel.app/?fbclid=IwAR1hxWDvhAlMEM3knhBFjVWqA3--Sl6TXCGhaqoICa08sEdXOZziW00Bpz8)

## Introduction

Welcome to this project where I have utilized Next.js, GraphQL, TypeScript and Tailwind CSS to develop a website using the Pokemon GraphQL API as the backend.
Before embarking on this project, I was new to both Next.js and GraphQL, making this project an exciting opportunity for me to learn and challenge myself.
Through working on this project, I was able to improve my skills in these technologies and deliver a high-quality end product.
Despite the challenges and obstacles I faced along the way, I persevered and was able to complete the project within the allotted time frame.
This project showcases not only my technical skills, but also my dedication, determination and ability to learn new technologies.
I am confident that this project will make me a strong applicant and demonstrate my potential as a software developer.

The following tools and technologies were used:

- Next.js for the web framework
- Typescript for type checking
- GraphQL API as the backend
- Tailwind css as a design framework
- Deployed on Vercel

## Problem Solving Approach

Throughout the development process, I faced various challenges and learned many new things. In this section, I will discuss the problems I encountered and the approaches I took to solve them.

### Problem 1: Displaying High Quality Pokemon Images

One challenge faced during the development of this project was displaying high quality images of the Pokemon. The GraphQL API used for this project provided image URLs through the sprites property. However, the high quality image was not accessible through the sprites property .I think it was not defined in the GraphQL schema.

Solution:Modifying the Image URL
To resolve this issue, the URL for the front default image was used as a base and modified to retrieve the high quality image. The URL retrieved from the sprites.
front_default property was found to be similar to the URL for the high quality image, which was located in the sprites.other property.
By adding a specific string to the URL retrieved from sprites.front_default, the high quality image could be successfully retrieved.
This solution allowed for the display of high quality Pokemon images on the website without relying on the undefined sprites.other property.
The function I have used

```ts
export const addPathC = (url: string): string =>
  url.replace("pokemon/", "pokemon/other/official-artwork/");
```

### Problem 2: Displaying the Pokemon's description text on the Pokemon single page

The problem is that the data for the Pokemon's description text was not present in the GraphQL schema and could not be retrieved by the query. The description text was located in pokemon => species => flavor_text_entries[9].flavor_text, but flavor_text_entries was not present in the GraphQL API schema.

To solve this issue, a GET request was made using fetchApi on the link generated by pokemon => species, which returned the necessary data. Although this solution may not be ideal, it was the only solution found to display the Pokemon's description text on the single page. The code for this solution is as follows:

```ts
const [pokemon, setPokemon] = useState<any>(null);
useEffect(() => {
  const fetchData = async () => {
    try {
      const res = await fetch(`${data.pokemon.species.url}`);
      const data1 = await res.json();
      setPokemon(data1);
    } catch (err: any) {}
  };
  fetchData();
}, []);
```

While this approach allowed me to successfully retrieve the description text, it's worth noting that I am not certain if this is the optimal or correct method for accessing this data.
However, at the time, it was the best solution I could find to achieve the desired outcome.

### Problem 3: Implementing a Vertical Autoplay Slider &mobile slider

I faced a challenge when it came to implementing a vertical autoplay slider. After researching and experimenting with various options, I found that there was limited support for vertical autoplay sliders.

Despite the difficulty, I was determined to find a solution. After spending a considerable amount of time experimenting and testing different methods, I was finally able to implement a vertical autoplay slider that met the requirements of the project.

This process took a significant amount of time and effort, but it allowed me to further develop my skills in web development and problem-solving.

### Problem 4: Achieving Responsiveness in the Web Application

While developing the web application, making it responsive across different devices was a challenge. This is because different devices have different screen sizes and resolutions, which can affect the way the web application is displayed.
To overcome this challenge, I utilized the power of Tailwind CSS. This utility-first CSS framework provides a wide range of classes that can be easily combined to achieve a responsive design. Despite some initial difficulties,
I was able to use Tailwind CSS effectively to make the web application responsive, ensuring that the layout and content are properly displayed on different devices.

## Conclusion

This project provided me with a great opportunity to showcase my skills and learn new technologies. I hope that my approach to problem solving and my final product will demonstrate my proficiency in developing web applications using Next.js, GraphQL API, and a Design Framework.

<=**\*\***\*\***\*\***\*\***\*\***\*\***\*\***\***\*\***\*\***\*\***\*\***\*\***\*\***\*\***=>

# Get Up and Running: A Guide to Cloning and Running the Project Locally

## Getting Started

The following instructions will help you set up and run the Pokemon App project on your local machine.

### Cloning The Project

1. Clone the repository to your local machine by running the following command in the terminal:

```bash
git clone https://github.com/nasim67reja/Pokemon-App.git
```

2. Navigate into the project directory:

```bash
cd Pokemon-App
```

### Installing Dependencies

1. Install the required dependencies by running the following command in the terminal:

```bash
npm install
or
yarn install
```

### Running the Project

1. Start the development server by running the following command in the terminal:

```bash
npm run dev
or
yarn dev
```

2. The website should now be accessible at [http://localhost:3000](http://localhost:3000) in your web browser.

### Deploying the Project

There are so many platforms for deploying a project. You can choose whatever you want. check [https://vercel.com/guides/deploying-nextjs-with-vercel](https://vercel.com/guides/deploying-nextjs-with-vercel) this doc if you want to deploy the project on vercel
