using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Swashbuckle.AspNetCore.Annotations;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Waymark.Api.PeopleApi;

namespace Waymark.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PersonController : ControllerBase
    {
        PeopleApiClient _client;

        public PersonController(PeopleApiClient client)
        {
            _client = client;
        }

        [HttpGet("GetPeople", Name = "GetPeople")]
        [SwaggerResponse(StatusCodes.Status200OK, Type = typeof(PersonDto[]))]
        public async Task<ActionResult> GetPeople()
        {
            var people = await _client.GetPeople();

            return Ok(people);
        }
    }
}
