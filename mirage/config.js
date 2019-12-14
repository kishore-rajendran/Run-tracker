export default function () {

  this.post("/authenticate", (schema, request) => {
    var params = JSON.parse(request.requestBody);
    let username = params.username;
    let password = params.password;
    let credentials = schema.userDetails.where({ username: username, password: password });
    if (credentials.models.length == 1) return Promise.resolve(credentials.models[0].attrs.id);
    else return Promise.resolve("failed");
  })

  this.post("/user-details", (schema, request) => {
    var params = JSON.parse(request.requestBody);
    return schema.userDetails.create(params);
    // let user = schema.userDetails.where({ username: params.data.attributes.username });
    // if (user.length == 0) {
    //   return schema.userDetails.create(params);
    // }
    // else {
    //   return Promise.resolve({ errors: ["User already exist"] });
    // }
    //do user and email check - low priority now
  });

  this.patch("/user-details/:id", (schema, request) => {
    // console.log(request);
    let test = schema.userDetails.find(request.params.id);
    var params = JSON.parse(request.requestBody);
    //params.data.attributes.password = test.attrs.password;
    schema.db.userDetails.update(request.params.id, params.data.attributes);
    let out = schema.userDetails.find(request.params.id)
    //out.attrs.password = null;
    return out;
  })

  this.get("/user-details/:id", (schema, request) => {
    let test = schema.userDetails.find(request.params.id)
    //test.attrs.password = null;
    // console.log(test);
    return test;
  })

  this.get("/user-details", (schema, request) => {
    if (Object.keys(request.queryParams).length === 0) {
      return schema.userDetails.all();
    }
    return schema.userDetails.where(request.queryParams);
  })

  this.get("/activity-trackers", (schema, request) => {
    return schema.activityTrackers.where(request.queryParams);
  });

  this.post("/activity-trackers", (schema, request) => {
    var params = JSON.parse(request.requestBody);
    return schema.activityTrackers.create(params);
  })

  this.get("/friend-lists", (schema) => {
    return schema.friendLists.all();
  })

  this.post("/posts", (schema, request) => {
    var params = JSON.parse(request.requestBody);
    return schema.posts.create(params);
  })








  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).
 
    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `/api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:
 
    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');
 
    https://www.ember-cli-mirage.com/docs/route-handlers/shorthands
  */
}
