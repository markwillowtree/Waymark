using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Runtime.CompilerServices;
using System.Threading.Tasks;

namespace Waymark.Api.PeopleApi
{
    
    public class PeopleApiClient
    {
        internal HttpClient _client;
        internal string _token;
        
        public PeopleApiClient(string url, string token)
        {
            _client = new HttpClient();
            _client.BaseAddress = new Uri(url);
            _token = token;
            
            //_client.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Bearer", token);
        }

        public async Task<PersonDto[]> GetPeople()
        {
            PersonDto[] people = null;
            HttpResponseMessage response = await _client.GetAsync($"GETPersonsTechTestAPI?code={_token}==");
            if (response.IsSuccessStatusCode)
            {
                people = await response.Content.ReadAsAsync<PersonDto[]>();
            }
            return people;
        }
    }
}
