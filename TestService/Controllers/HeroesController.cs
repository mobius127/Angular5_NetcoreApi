
namespace TestService.Controllers
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.EntityFrameworkCore;
    using Microsoft.Extensions.Logging;
    using TestService.BLL.Context;
    using TestService.BLL.Entities;

    [Route("api/Heroes")]
    public class HeroesController : Controller
    {
        private readonly HeroesContext context;

        private readonly ILogger logger;

        public HeroesController(HeroesContext context, ILogger<HeroesController> logger)
        {
            this.context = context;
            this.logger = logger;
        }

        [HttpGet]
        public IEnumerable<Hero> Get()
        {
            try
            {
                return context.Heroes.ToList();
            }
            catch (Exception ex)
            {
                this.logger.LogError(ex, "An error occurred while seeding the database.");
                return null;
            }

        }

    }
}