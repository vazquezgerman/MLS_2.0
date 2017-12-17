using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace mls_backend.Controllers
{
    [Produces("application/json")]
    [Route("api/Property")]
    public class PropertyController : Controller
    {
        readonly MLSContext context;

        public PropertyController (MLSContext context)
        {
            this.context = context;
        }

        // GET api/values
        [HttpGet]
        public IEnumerable<Models.Property> Get()
        {
            return new Models.Property[] {
                new Models.Property() { Calle = "San Lorenzo"},
                new Models.Property() { Calle = "Brown"},
                new Models.Property() { Calle = "Moreno"},
            };
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody]Models.Property calle)
        {
            context.Property.Add(new Models.Property() { Calle = "test" });
            context.SaveChanges();
        }
    }
}