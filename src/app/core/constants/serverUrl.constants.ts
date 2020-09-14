export class ServerUrl {

  public static MAIN = 'http://ptdevenv.co.in/avalon_realty_dev_env/';

  public static API_ENDPOINT_ALL_PROPS = 'allProp';
  public static API_ENDPOINT_PROPS_DETAILS = 'singleProp?id=';
  public static API_ENDPOINT_FEATURED_PROPS = 'featuredProp';
  public static API_ENDPOINT_ALL_BLOGS = 'allBlogs';
  public static API_ENDPOINT_BLOG_DETAILS = 'singleBlog?id=';
  public static API_ENDPOINT_BLOG_CONTACT = 'contact';
  static IMAGE_BASE_PATH: string = ServerUrl.MAIN + 'public';
}