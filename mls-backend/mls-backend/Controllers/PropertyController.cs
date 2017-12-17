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
        // POST api/values
        [HttpPost]
        public void Post([FromBody]Models.Property calle)
        {
        }
    }
}