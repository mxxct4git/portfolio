const constants = {
  title: "Panda",
  description: "Panda's portofolio website",

  navigation: [
    { name: "Home", href: "/", blank: false },
    { name: "Posts", href: "https://mxxct4git.github.io", blank: true },
    { name: "Projects", href: "/projects/1", blank: false },
    { name: "About", href: "/about", blank: false },
  ],
  companyName: "Panda",
  companyLogo: "/images/panda_750.png",
  github: "https://github.com/mxxct4git",
  email: "jzha0598@student.monash.edu",

  authorBanner: {
    "bannerTitle": "Hi,&nbsp;👋&nbsp;I&#39;m Panda",
    "bannerSubtitle": "Leave this place, go out into the world, and never look back.",
    "bannerTrans": "离开这里，走出去，别回头看。",
    "bannerBrief": "MIT at Monash University, Australia",
    "bannerDesc": "After working for 6 years, I decided to go abroad, changing my identity from a worker to a student, hoping to see the outside world."
  },

  // introduce: [
  //   {
  //     prefix: "A",
  //     keywords: "big data development",
  //     suffix: "engineer",
  //   },
  //   {
  //     prefix: "With",
  //     keywords: "6 years",
  //     suffix: "of work experience",
  //   },
  //   {
  //     prefix: "Studing",
  //     keywords: "MIT",
  //     suffix: "at Monash University, Australia",
  //   },
  // ],

  about: [
    {
      prefix: "A",
      keywords: "big data development",
      suffix: "engineer",
    },
    {
      prefix: "With",
      keywords: "6 years",
      suffix: "of work experience",
    },
    {
      prefix: "Worked on",
      keywords: "front-end, back-end, data warehouse, big data development",
      suffix: "at 3 different types of companies",
    },
    {
      prefix: "Focusing on",
      keywords: "full-stack",
      suffix: "development right now",
    },
    {
      prefix: "Studing",
      keywords: "MIT",
      suffix: "at Monash University, Australia",
    },
  ],

  timelineItems: [
    {
      date: "03/2025 -- now",
      title: "Monash University",
      content: "Pursue a master's degree in IT",
      type: "ongoing",
    },
    {
      date: "05/2023 -- 10/2023",
      title: "Beijing FESCO Adecco Shanghai Co., Ltd.",
      content:
        "Based on Huawei Cloud, we develop products that focus on data governance to help enterprises quickly standardize data management and improve the value of data.",
      type: "success",
    },
    {
      date: "02/2021 -- 01/2023",
      title: "Beijing Souer Information Technology Co., Ltd. ",
      content:
        "Responsible for building an enterprise-level user portrait platform from 0 to 1, supporting 70,000+ qps during business peak and 3.5 billion+ queries per day.",
      type: "success",
    },
    {
      date: "07/2018 -- 02/2021",
      title: "Xinzhi Wolai Network Technology Co., Ltd.",
      content:
        "From the front-end to the back-end, from data warehouse modeling to one-data service development, master the enterprise application development skills in all aspects.",
      type: "success",
    },
  ],
  // https://lf3-starry.byteimg.com/obj/starry/image/xeujaamdeoq_数据资产沉淀.png
  // https://lf3-starry.byteimg.com/obj/starry/image/oygh3wjpcs_精细化运营.png
  // https://lf3-starry.byteimg.com/obj/starry/image/437plo29nnn_广告精准投放.png
  // https://lf3-starry.byteimg.com/obj/starry/image/8sbe6t1o1ua_流失用户挽回.png
  // https://lf3-starry.byteimg.com/obj/starry/image/98q9cavm01u_销售赋能场景.png
  projectList: [
    {
      id: 1,
      title: "User portrait",
      mdFilePath: "/vault/Portrait.md",
      description:
        "A platform that provides a comprehensive view of user behavior and preferences, enabling businesses to make informed decisions and improve their products and services.",
      coverAlt: "user portrait cover",
      coverUrl: "https://lf3-starry.byteimg.com/obj/starry/image/xeujaamdeoq_数据资产沉淀.png",
      picUrl: "https://lf3-starry.byteimg.com/obj/starry/image/xeujaamdeoq_数据资产沉淀.png",
      cardContent:
        "A platform that provides a comprehensive view of user behavior and preferences, enabling businesses to make informed decisions and improve their products and services. It involves analyzing user behavior data, deriving insights, and presenting it in a visually appealing and interactive way.",
    },
    {
      id: 2,
      title: "OneData Solution",
      mdFilePath: "/vault/OneData.md",
      description:
        "A platform that provides a single point of access to all data sources, enabling businesses to access and analyze data from various sources in a single place.",
      coverAlt: "example",
      coverUrl: "/images/cover2.png",
      picUrl: "https://img.alicdn.com/imgextra/i1/O1CN01lpsDec1Z6v0R2Pi02_!!6000000003146-2-tps-2320-1264.png",
      cardContent:
        "A platform that provides a single point of access to all data sources, enabling businesses to access and analyze data from various sources in a single place. It involves integrating data from various sources, providing a unified data model, and enabling users to access data in real-time and with ease.",
    },
    {
      id: 3,
      title: "Real-time data analysis",
      mdFilePath: "/vault/Realtime.md",
      description:
        "A platform that provides real-time data analysis and visualization, enabling businesses to gain insights from data in real-time.",
      coverAlt: "example",
      coverUrl: "/images/cover6.png",
      picUrl: "/images/realtime.webp",
      cardContent:
        "A platform that provides real-time data analysis and visualization, enabling businesses to gain insights from data in real-time. It involves analyzing data in real-time, providing real-time data visualization, and enabling users to interact with data in real-time.",
    },
  ],

  logoList: [
    {
      id: 1,
      alt: "Vue.",
      src: "https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg",
    },
    {
      id: 2,
      alt: "Nextjs",
      src: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg",
    },
    // {
    //   id: 3,
    //   alt: "Java",
    //   src: "/images/java.png",
    // },
    // {
    //   id: 4,
    //   alt: "Kafka",
    //   src: "https://static.wikia.nocookie.net/logopedia/images/d/d8/Apache_Kafka_Logo.jpg/revision/latest?cb=20220703023613",
    // },
    {
      id: 5,
      alt: "Spring Boot",
      src: "/images/spring-2.svg",
    },
    {
      id: 6,
      alt: "Hadoop",
      src: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Hadoop_logo.svg",
    },
    // {
    //   id: 6,
    //   alt: "Spark",
    //   src:"https://upload.wikimedia.org/wikipedia/commons/f/f3/Apache_Spark_logo.svg"
    // },
    {
      id: 7,
      alt: "Flink",
      src: "/images/flink.jpg",
    },

    {
      id: 8,
      alt: "Mysql",
      src: "https://upload.wikimedia.org/wikipedia/commons/0/0a/MySQL_textlogo.svg",
    },
    {
      id: 9,
      alt: "Redis",
      src: "https://upload.wikimedia.org/wikipedia/commons/6/64/Logo-redis.svg",
    },
    {
      id: 10,
      alt: "Clilckhouse",
      src: "/images/clickhouse.svg",
    },
  ],

  latestPostList: [
    {
      id: 1,
      title: "HBase 连接",
      href: "https://mxxct4git.github.io/2023/03/31/Hadoop/HBase/HBase-4%20连接/",
      description:
        "以 alihbase-client 2.8.6 jar 为例，介绍 HBase 连接的基本步骤。",
      date: "Mar 31, 2023",
      datetime: "2023-03-31",
      category: "HBase",
    },
    {
      id: 2,
      title: "深入理解 Kafka",
      href: "https://mxxct4git.github.io/2022/03/06/Kafka/Kafka-3%20%E6%B7%B1%E5%85%A5%E7%90%86%E8%A7%A3Kafka/",
      description:
        "以 alihbase-client 2.8.6 jar 为例，介绍 HBase 连接的基本步骤。",
      date: "Mar 06, 2022",
      datetime: "2022-03-06",
      category: "Kafka",
    },
    {
      id: 3,
      title: "Flink 总结",
      href: "https://mxxct4git.github.io/2020/10/20/Flink/Flink-2%20%E6%80%BB%E7%BB%93/",
      description:
        "Flink 是一个开源的分布式计算框架，本文总结了 Flink 的一些基本概念和使用方法。",
      date: "Oct 20, 2020",
      datetime: "2020-10-20",
      category: "Flink",
    },
  ],

  author: "Jiahao Zhang",
  headerTitle: "Panda",
  language: "en-us",
  siteUrl: "https://thvu.dev",
  siteRepo: "https://github.com/ThangHuuVu/thvu-blog",
  siteLogo: "/static/images/logo.png",
  image:
    "https://pbs.twimg.com/profile_images/1853846849989550081/Wx-52OPe_400x400.jpg",
  socialBanner: "/static/images/social-banner.png",

  twitter: "https://twitter.com/thanghvu",
  linkedin: "https://www.linkedin.com/in/thanghuuvu/",
  codepen: "https://codepen.io/thanghuuvu",
  locale: "en-US",
};

export default constants;
